package main

import (
	"bireca/backend/handlers"
	"bireca/backend/middleware"
	"log"
	"net/http"
	"os"
)

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("GET /api/health", handlers.Health)
	mux.HandleFunc("GET /api/services", handlers.Services)
	mux.HandleFunc("GET /api/insights", handlers.Insights)
	mux.HandleFunc("POST /api/contact", handlers.Contact)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	handler := middleware.CORS(mux)
	log.Printf("Bireca API listening on :%s", port)
	log.Fatal(http.ListenAndServe(":"+port, handler))
}
