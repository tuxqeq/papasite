package data

import "bireca/backend/models"

var Insights = []models.Insight{
	{
		ID:              "1",
		Slug:            "ai-transformation-2025",
		Title:           "How AI is Reshaping Enterprise Operations in 2025",
		Excerpt:         "Artificial intelligence is no longer a future concept — it's the backbone of competitive enterprise operations. Discover how leading companies are deploying AI at scale.",
		Category:        "AI & Data",
		ImageURL:        "https://picsum.photos/seed/ai2025/800/450",
		PublishedAt:     "2025-03-10",
		ReadTimeMinutes: 7,
		Author:          "Marta Kowalska",
	},
	{
		ID:              "2",
		Slug:            "cloud-migration-guide",
		Title:           "The Complete Guide to Enterprise Cloud Migration",
		Excerpt:         "Moving to the cloud is a strategic journey, not just a technical lift-and-shift. Learn the frameworks and best practices our teams use with Fortune 500 clients.",
		Category:        "Cloud",
		ImageURL:        "https://picsum.photos/seed/cloud2025/800/450",
		PublishedAt:     "2025-02-28",
		ReadTimeMinutes: 10,
		Author:          "Piotr Nowak",
	},
	{
		ID:              "3",
		Slug:            "cybersecurity-zero-trust",
		Title:           "Zero Trust Architecture: A Practical Framework",
		Excerpt:         "The perimeter is dead. Zero trust isn't a product — it's a philosophy. Here's how to implement it without disrupting your existing operations.",
		Category:        "Cybersecurity",
		ImageURL:        "https://picsum.photos/seed/zerotrust/800/450",
		PublishedAt:     "2025-02-14",
		ReadTimeMinutes: 8,
		Author:          "Anna Wiśniewska",
	},
	{
		ID:              "4",
		Slug:            "digital-strategy-roi",
		Title:           "Measuring ROI on Digital Transformation Initiatives",
		Excerpt:         "Digital transformation investments are significant. Learn how to set the right KPIs, build a measurement framework, and demonstrate value to the board.",
		Category:        "Strategy",
		ImageURL:        "https://picsum.photos/seed/digitalroi/800/450",
		PublishedAt:     "2025-01-20",
		ReadTimeMinutes: 6,
		Author:          "Tomasz Jabłoński",
	},
}
