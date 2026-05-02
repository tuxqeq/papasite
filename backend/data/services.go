package data

import "bireca/backend/models"

var Services = []models.Service{
	{
		ID:          "1",
		Slug:        "executive-intelligence",
		Title:       "Executive Intelligence",
		Description: "Turn management data into decisive action with real-time dashboards and KPI frameworks tailored for C-suite leadership.",
		Icon:        "BarChart2",
		ImageURL:    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
		Features:    []string{"Executive dashboards", "KPI frameworks", "Board-ready reports", "Performance benchmarking"},
	},
	{
		ID:          "2",
		Slug:        "sales-performance",
		Title:       "Sales Performance",
		Description: "Uncover revenue opportunities and forecast with confidence using unified sales performance analytics across every channel.",
		Icon:        "TrendingUp",
		ImageURL:    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
		Features:    []string{"Pipeline visibility", "Revenue forecasting", "Sales team performance", "Channel analytics"},
	},
	{
		ID:          "3",
		Slug:        "marketing-intelligence",
		Title:       "Marketing Intelligence",
		Description: "Measure what matters — from campaign ROI to customer acquisition costs — with marketing intelligence that drives growth.",
		Icon:        "Target",
		ImageURL:    "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80&auto=format&fit=crop",
		Features:    []string{"Campaign ROI tracking", "Attribution modelling", "Audience segmentation", "Growth dashboards"},
	},
	{
		ID:          "4",
		Slug:        "risk-intelligence",
		Title:       "Risk Intelligence",
		Description: "Identify, quantify, and mitigate enterprise risk with integrated risk dashboards that keep leadership one step ahead.",
		Icon:        "AlertTriangle",
		ImageURL:    "https://images.unsplash.com/photo-1771931322109-180bb1b35bf8?w=800&q=80&auto=format&fit=crop",
		Features:    []string{"Risk heat maps", "Scenario modelling", "Regulatory compliance", "Incident tracking"},
	},
	{
		ID:          "5",
		Slug:        "operational-excellence",
		Title:       "Operational Excellence",
		Description: "Optimise production efficiency and reduce downtime with live operational dashboards that connect the factory floor to the boardroom.",
		Icon:        "Factory",
		ImageURL:    "https://images.unsplash.com/photo-1717386255773-1e3037c81788?w=800&q=80&auto=format&fit=crop",
		Features:    []string{"OEE monitoring", "Downtime analysis", "Production KPIs", "Capacity planning"},
	},
	{
		ID:          "6",
		Slug:        "supply-chain-visibility",
		Title:       "Supply Chain Visibility",
		Description: "Gain end-to-end visibility across your supply chain with predictive analytics that reduce risk and improve resilience.",
		Icon:        "Truck",
		ImageURL:    "https://images.unsplash.com/photo-1573209680076-bd7ec7007616?w=800&q=80&auto=format&fit=crop",
		Features:    []string{"Inventory optimisation", "Supplier performance", "Demand forecasting", "Logistics visibility"},
	},
	{
		ID:          "7",
		Slug:        "security-it-governance",
		Title:       "Security & IT Governance",
		Description: "Monitor threats, track compliance, and govern your IT landscape with consolidated security intelligence and audit-ready reporting.",
		Icon:        "Shield",
		ImageURL:    "https://images.unsplash.com/photo-1763128516808-785e80c1dd68?w=800&q=80&auto=format&fit=crop",
		Features:    []string{"Threat monitoring", "Compliance dashboards", "IT asset governance", "Audit reporting"},
	},
}
