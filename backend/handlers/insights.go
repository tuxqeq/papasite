package handlers

import (
	"biretica/backend/data"
	"biretica/backend/models"
	"encoding/json"
	"net/http"
	"strconv"
)

func Insights(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	results := data.Insights

	// Optional ?category=X filter
	if cat := r.URL.Query().Get("category"); cat != "" {
		filtered := []models.Insight{}
		for _, ins := range results {
			if ins.Category == cat {
				filtered = append(filtered, ins)
			}
		}
		results = filtered
	}

	// Optional ?limit=N
	if limitStr := r.URL.Query().Get("limit"); limitStr != "" {
		if limit, err := strconv.Atoi(limitStr); err == nil && limit > 0 && limit < len(results) {
			results = results[:limit]
		}
	}

	resp := models.APIResponse[[]models.Insight]{
		Data:    results,
		Success: true,
	}
	json.NewEncoder(w).Encode(resp)
}
