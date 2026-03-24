package handlers

import (
	"biretica/backend/models"
	"encoding/json"
	"log"
	"net/http"
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

	json.NewEncoder(w).Encode(models.APIResponse[any]{
		Success: true,
		Message: "Thank you, we'll be in touch within 24 hours.",
	})
}
