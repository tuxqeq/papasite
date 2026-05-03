package handlers

import (
	"bireca/backend/models"
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"os"
	"testing"
)

func TestContact_MethodNotAllowed(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/contact", nil)
	w := httptest.NewRecorder()
	Contact(w, req)

	if w.Code != http.StatusMethodNotAllowed {
		t.Errorf("expected 405, got %d", w.Code)
	}
}

func TestContact_InvalidJSON(t *testing.T) {
	req := httptest.NewRequest(http.MethodPost, "/api/contact", bytes.NewBufferString("not json"))
	req.Header.Set("Content-Type", "application/json")
	w := httptest.NewRecorder()
	Contact(w, req)

	if w.Code != http.StatusBadRequest {
		t.Errorf("expected 400, got %d", w.Code)
	}
}

func TestContact_MissingName(t *testing.T) {
	body := models.ContactForm{Email: "test@example.com", Message: "Hello"}
	assertContactRejects(t, body)
}

func TestContact_MissingEmail(t *testing.T) {
	body := models.ContactForm{Name: "Jane", Message: "Hello"}
	assertContactRejects(t, body)
}

func TestContact_MissingMessage(t *testing.T) {
	body := models.ContactForm{Name: "Jane", Email: "test@example.com"}
	assertContactRejects(t, body)
}

func TestContact_ValidSubmission_Returns200(t *testing.T) {
	// Ensure SMTP vars are unset so email attempt is skipped cleanly
	os.Unsetenv("SMTP_FROM")
	os.Unsetenv("SMTP_PASS")

	body := models.ContactForm{
		Name:    "Jane Smith",
		Email:   "jane@example.com",
		Company: "ACME",
		Service: "Executive Intelligence",
		Message: "I'd like to learn more.",
	}
	req := newContactRequest(t, body)
	w := httptest.NewRecorder()
	Contact(w, req)

	if w.Code != http.StatusOK {
		t.Errorf("expected 200, got %d", w.Code)
	}

	var resp models.APIResponse[any]
	json.NewDecoder(w.Body).Decode(&resp)
	if !resp.Success {
		t.Errorf("expected success=true, got false. message: %s", resp.Message)
	}
}

func TestContact_ValidSubmission_EmailFailureDoesNotChangeStatus(t *testing.T) {
	os.Unsetenv("SMTP_FROM")
	os.Unsetenv("SMTP_PASS")

	body := models.ContactForm{Name: "Test", Email: "t@t.com", Message: "msg"}
	req := newContactRequest(t, body)
	w := httptest.NewRecorder()
	Contact(w, req)

	// Even when email fails, API still returns 200 success
	if w.Code != http.StatusOK {
		t.Errorf("expected 200 even on email failure, got %d", w.Code)
	}
}

func TestSendContactEmail_MissingEnvVars(t *testing.T) {
	os.Unsetenv("SMTP_FROM")
	os.Unsetenv("SMTP_PASS")

	err := sendContactEmail(models.ContactForm{
		Name: "Test", Email: "t@t.com", Message: "Hi",
	})
	if err == nil {
		t.Error("expected error when SMTP env vars not set")
	}
}

func TestSendContactEmail_MissingSMTPFrom(t *testing.T) {
	os.Unsetenv("SMTP_FROM")
	os.Setenv("SMTP_PASS", "somepass")
	defer os.Unsetenv("SMTP_PASS")

	err := sendContactEmail(models.ContactForm{
		Name: "Test", Email: "t@t.com", Message: "Hi",
	})
	if err == nil {
		t.Error("expected error when SMTP_FROM not set")
	}
}

// assertContactRejects posts the given form and expects a 400 response.
func assertContactRejects(t *testing.T, form models.ContactForm) {
	t.Helper()
	req := newContactRequest(t, form)
	w := httptest.NewRecorder()
	Contact(w, req)

	if w.Code != http.StatusBadRequest {
		t.Errorf("expected 400, got %d", w.Code)
	}

	var resp models.APIResponse[any]
	json.NewDecoder(w.Body).Decode(&resp)
	if resp.Success {
		t.Error("expected success=false")
	}
}

// newContactRequest builds a POST /api/contact request from a ContactForm.
func newContactRequest(t *testing.T, form models.ContactForm) *http.Request {
	t.Helper()
	b, err := json.Marshal(form)
	if err != nil {
		t.Fatalf("failed to marshal form: %v", err)
	}
	req := httptest.NewRequest(http.MethodPost, "/api/contact", bytes.NewReader(b))
	req.Header.Set("Content-Type", "application/json")
	return req
}
