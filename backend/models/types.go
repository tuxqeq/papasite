package models

type Service struct {
	ID          string   `json:"id"`
	Slug        string   `json:"slug"`
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Icon        string   `json:"icon"`
	ImageURL    string   `json:"imageUrl"`
	Features    []string `json:"features"`
}

type Insight struct {
	ID              string `json:"id"`
	Slug            string `json:"slug"`
	Title           string `json:"title"`
	Excerpt         string `json:"excerpt"`
	Category        string `json:"category"`
	ImageURL        string `json:"imageUrl"`
	PublishedAt     string `json:"publishedAt"`
	ReadTimeMinutes int    `json:"readTimeMinutes"`
	Author          string `json:"author"`
}

type ContactForm struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Company string `json:"company"`
	Message string `json:"message"`
	Service string `json:"service,omitempty"`
}

type APIResponse[T any] struct {
	Data    T      `json:"data"`
	Success bool   `json:"success"`
	Message string `json:"message,omitempty"`
}
