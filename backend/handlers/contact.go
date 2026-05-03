package handlers

import (
	"bireca/backend/models"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/smtp"
	"os"
)

func Contact(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodPost {
		w.WriteHeader(http.StatusMethodNotAllowed)
		json.NewEncoder(w).Encode(models.APIResponse[any]{Success: false, Message: "method not allowed"})
		return
	}

	var form models.ContactForm
	if err := json.NewDecoder(r.Body).Decode(&form); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(models.APIResponse[any]{Success: false, Message: "invalid request body"})
		return
	}

	if form.Name == "" || form.Email == "" || form.Message == "" {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(models.APIResponse[any]{Success: false, Message: "name, email, and message are required"})
		return
	}

	log.Printf("Contact form submission: name=%s email=%s company=%s service=%s", form.Name, form.Email, form.Company, form.Service)

	if err := sendContactEmail(form); err != nil {
		log.Printf("Email send failed: %v", err)
	}

	json.NewEncoder(w).Encode(models.APIResponse[any]{
		Success: true,
		Message: "Thank you, we'll be in touch within 24 hours.",
	})
}

func sendContactEmail(form models.ContactForm) error {
	from := os.Getenv("SMTP_FROM")
	pass := os.Getenv("SMTP_PASS")
	if from == "" || pass == "" {
		return fmt.Errorf("SMTP_FROM or SMTP_PASS not set")
	}

	to := "michael.gorshkov@gmail.com"
	subject := fmt.Sprintf("New Contact: %s <%s>", form.Name, form.Email)
	body := fmt.Sprintf(
		"Name:    %s\nEmail:   %s\nCompany: %s\nService: %s\n\nMessage:\n%s",
		form.Name, form.Email, form.Company, form.Service, form.Message,
	)
	msg := []byte(fmt.Sprintf(
		"From: Bireca Contact <%s>\r\nTo: %s\r\nSubject: %s\r\nContent-Type: text/plain; charset=utf-8\r\n\r\n%s",
		from, to, subject, body,
	))

	auth := smtp.PlainAuth("", from, pass, "smtp.gmail.com")
	return smtp.SendMail("smtp.gmail.com:587", auth, from, []string{to}, msg)
}
