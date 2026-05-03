package handlers

import (
	"bireca/backend/data"
	"bireca/backend/models"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"net/url"
	"testing"
)

func TestInsights_ReturnsAll(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/insights", nil)
	w := httptest.NewRecorder()
	Insights(w, req)

	var resp models.APIResponse[[]models.Insight]
	json.NewDecoder(w.Body).Decode(&resp)

	if !resp.Success {
		t.Error("expected success=true")
	}
	if len(resp.Data) != len(data.Insights) {
		t.Errorf("expected %d insights, got %d", len(data.Insights), len(resp.Data))
	}
}

func TestInsights_CategoryFilter_MatchesExisting(t *testing.T) {
	if len(data.Insights) == 0 {
		t.Skip("no insights data")
	}
	cat := data.Insights[0].Category
	req := httptest.NewRequest(http.MethodGet, "/api/insights?category="+url.QueryEscape(cat), nil)
	w := httptest.NewRecorder()
	Insights(w, req)

	var resp models.APIResponse[[]models.Insight]
	json.NewDecoder(w.Body).Decode(&resp)

	if len(resp.Data) == 0 {
		t.Errorf("expected at least one insight for category %q", cat)
	}
	for _, ins := range resp.Data {
		if ins.Category != cat {
			t.Errorf("expected category %q, got %q", cat, ins.Category)
		}
	}
}

func TestInsights_CategoryFilter_NoMatch(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/insights?category=NonExistentCategory", nil)
	w := httptest.NewRecorder()
	Insights(w, req)

	var resp models.APIResponse[[]models.Insight]
	json.NewDecoder(w.Body).Decode(&resp)

	if len(resp.Data) != 0 {
		t.Errorf("expected 0 insights for unknown category, got %d", len(resp.Data))
	}
	if !resp.Success {
		t.Error("expected success=true even with empty results")
	}
}

func TestInsights_LimitApplied(t *testing.T) {
	if len(data.Insights) < 2 {
		t.Skip("need at least 2 insights to test limit")
	}
	req := httptest.NewRequest(http.MethodGet, "/api/insights?limit=2", nil)
	w := httptest.NewRecorder()
	Insights(w, req)

	var resp models.APIResponse[[]models.Insight]
	json.NewDecoder(w.Body).Decode(&resp)

	if len(resp.Data) != 2 {
		t.Errorf("expected 2 insights, got %d", len(resp.Data))
	}
}

func TestInsights_LimitExceedsTotal_Ignored(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/insights?limit=999", nil)
	w := httptest.NewRecorder()
	Insights(w, req)

	var resp models.APIResponse[[]models.Insight]
	json.NewDecoder(w.Body).Decode(&resp)

	if len(resp.Data) != len(data.Insights) {
		t.Errorf("expected all %d insights, got %d", len(data.Insights), len(resp.Data))
	}
}

func TestInsights_Returns200(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/insights", nil)
	w := httptest.NewRecorder()
	Insights(w, req)

	if w.Code != http.StatusOK {
		t.Errorf("expected 200, got %d", w.Code)
	}
}
