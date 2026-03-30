package data

import "bireca/backend/models"

var Services = []models.Service{
	{
		ID:          "1",
		Slug:        "digital-strategy",
		Title:       "Digital Strategy",
		Description: "Define your digital future with data-driven strategies that align technology investments with business outcomes.",
		Icon:        "Lightbulb",
		Features:    []string{"Digital roadmap development", "Innovation workshops", "Technology assessment", "Change management"},
	},
	{
		ID:          "2",
		Slug:        "cloud-solutions",
		Title:       "Cloud Solutions",
		Description: "Accelerate your migration to the cloud with secure, scalable architectures built for enterprise performance.",
		Icon:        "Cloud",
		Features:    []string{"Cloud migration", "Multi-cloud strategy", "Cost optimization", "DevOps & automation"},
	},
	{
		ID:          "3",
		Slug:        "ai-data",
		Title:       "AI & Data Analytics",
		Description: "Unlock the value of your data with AI-powered insights that drive smarter decisions and operational efficiency.",
		Icon:        "Brain",
		Features:    []string{"Machine learning models", "Data engineering", "Business intelligence", "Predictive analytics"},
	},
	{
		ID:          "4",
		Slug:        "cybersecurity",
		Title:       "Cybersecurity",
		Description: "Protect your business with comprehensive security frameworks designed for today's evolving threat landscape.",
		Icon:        "Shield",
		Features:    []string{"Zero trust architecture", "Threat intelligence", "Security operations", "Compliance & governance"},
	},
	{
		ID:          "5",
		Slug:        "business-consulting",
		Title:       "Business Consulting",
		Description: "Transform your operating model with proven methodologies that deliver measurable, sustainable growth.",
		Icon:        "TrendingUp",
		Features:    []string{"Operating model design", "Process optimization", "Organizational design", "Performance management"},
	},
	{
		ID:          "6",
		Slug:        "tech-modernization",
		Title:       "Technology Modernization",
		Description: "Revitalize legacy systems and technical debt with modern architectures that scale with your ambitions.",
		Icon:        "Cpu",
		Features:    []string{"Legacy system migration", "API-first architecture", "Microservices", "Platform engineering"},
	},
}
