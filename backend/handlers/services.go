package handlers

import (
	"biretica/backend/data"
	"biretica/backend/models"
	"encoding/json"
	"net/http"
)

func Services(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	resp := models.APIResponse[[]models.Service]{
		Data:    data.Services,
		Success: true,
	}
	json.NewEncoder(w).Encode(resp)
}
