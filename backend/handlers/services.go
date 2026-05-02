package handlers

import (
	"bireca/backend/data"
	"bireca/backend/models"
	"encoding/json"
	"net/http"
	"strconv"
)

func Services(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	services := data.Services
	if limitStr := r.URL.Query().Get("limit"); limitStr != "" {
		if limit, err := strconv.Atoi(limitStr); err == nil && limit > 0 && limit < len(services) {
			services = services[:limit]
		}
	}
	resp := models.APIResponse[[]models.Service]{
		Data:    services,
		Success: true,
	}
	json.NewEncoder(w).Encode(resp)
}
