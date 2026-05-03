package handlers

import (
	"bireca/backend/data"
	"bireca/backend/models"
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestServices_ReturnsAll(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/services", nil)
	w := httptest.NewRecorder()
	Services(w, req)

	var resp models.APIResponse[[]models.Service]
	json.NewDecoder(w.Body).Decode(&resp)

	if !resp.Success {
		t.Error("expected success=true")
	}
	if len(resp.Data) != len(data.Services) {
		t.Errorf("expected %d services, got %d", len(data.Services), len(resp.Data))
	}
}

func TestServices_LimitApplied(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/services?limit=3", nil)
	w := httptest.NewRecorder()
	Services(w, req)

	var resp models.APIResponse[[]models.Service]
	json.NewDecoder(w.Body).Decode(&resp)

	if len(resp.Data) != 3 {
		t.Errorf("expected 3 services, got %d", len(resp.Data))
	}
}

func TestServices_LimitEqualToTotal_Ignored(t *testing.T) {
	total := len(data.Services)
	req := httptest.NewRequest(http.MethodGet, "/api/services?limit="+itoa(total), nil)
	w := httptest.NewRecorder()
	Services(w, req)

	var resp models.APIResponse[[]models.Service]
	json.NewDecoder(w.Body).Decode(&resp)

	if len(resp.Data) != total {
		t.Errorf("expected %d services, got %d", total, len(resp.Data))
	}
}

func TestServices_LimitExceedsTotal_Ignored(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/services?limit=999", nil)
	w := httptest.NewRecorder()
	Services(w, req)

	var resp models.APIResponse[[]models.Service]
	json.NewDecoder(w.Body).Decode(&resp)

	if len(resp.Data) != len(data.Services) {
		t.Errorf("expected all %d services, got %d", len(data.Services), len(resp.Data))
	}
}

func TestServices_LimitZero_Ignored(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/services?limit=0", nil)
	w := httptest.NewRecorder()
	Services(w, req)

	var resp models.APIResponse[[]models.Service]
	json.NewDecoder(w.Body).Decode(&resp)

	if len(resp.Data) != len(data.Services) {
		t.Errorf("expected all %d services, got %d", len(data.Services), len(resp.Data))
	}
}

func TestServices_InvalidLimit_Ignored(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/services?limit=abc", nil)
	w := httptest.NewRecorder()
	Services(w, req)

	var resp models.APIResponse[[]models.Service]
	json.NewDecoder(w.Body).Decode(&resp)

	if len(resp.Data) != len(data.Services) {
		t.Errorf("expected all %d services for invalid limit, got %d", len(data.Services), len(resp.Data))
	}
}

func TestServices_Returns200(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/services", nil)
	w := httptest.NewRecorder()
	Services(w, req)

	if w.Code != http.StatusOK {
		t.Errorf("expected 200, got %d", w.Code)
	}
}

// itoa converts an int to string for URL building in tests.
func itoa(n int) string {
	return fmt.Sprintf("%d", n)
}
