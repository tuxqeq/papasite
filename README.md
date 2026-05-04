# bireca.com

Website for **Bireca** — a digital transformation consultancy that helps organisations turn raw data into decisive insight through executive dashboards, analytics services, and strategic advisory.

> Founded in Warsaw, 2025.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion |
| Backend | Go 1.24, standard `net/http` |
| CI/CD | GitHub Actions |
| Frontend hosting | Vercel |
| Backend hosting | AWS EC2 (systemd service) |

---

## Project Structure

```
bireca.com/
├── frontend/          # Next.js application
│   └── src/
│       ├── app/       # Pages (Home, About, Services, Insights, Contact)
│       ├── components/
│       │   ├── layout/    # Navbar, Footer
│       │   ├── sections/  # Page sections (Hero, ServicesGrid, …)
│       │   └── ui/        # Reusable UI primitives
│       ├── lib/       # Shared utilities and API helpers
│       └── types/     # TypeScript type definitions
└── backend/           # Go REST API
    ├── handlers/      # HTTP handler functions
    ├── middleware/    # CORS middleware
    ├── models/        # Shared data types
    └── data/          # In-memory data (services, insights)
```

---

## Local Development

### Prerequisites

- **Node.js** 20+
- **Go** 1.24+

### Frontend

```bash
cd frontend
npm install
npm run dev        # starts at http://localhost:3000
```

### Backend

```bash
cd backend
go run .           # starts at http://localhost:8080
```

The frontend expects the backend at `http://localhost:8080` by default. Set the `NEXT_PUBLIC_API_URL` environment variable to override.

---

## API Reference

Base URL (production): `https://api.bireca.com`

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/health` | Health check |
| `GET` | `/api/services` | List all services (optional `?limit=N`) |
| `GET` | `/api/insights` | List insights (`?category=X`, `?limit=N`) |
| `POST` | `/api/contact` | Submit a contact form |

### `POST /api/contact` body

```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "company": "Acme Corp",
  "service": "executive-intelligence",
  "message": "We'd like to learn more."
}
```

Contact form submissions are forwarded by email. Configure the following environment variables on the backend host:

| Variable | Description |
|---|---|
| `SMTP_FROM` | Gmail address used to send the notification |
| `SMTP_PASS` | Gmail app password |
| `PORT` | HTTP port (default `8080`) |

---

## Running Tests

```bash
# Backend
cd backend && go test ./...

# Frontend
cd frontend && npm test
```

CI runs both test suites automatically on every push and pull request targeting `main`.

---

## Deployment

### Backend (EC2)

GitHub Actions builds a static Linux binary and copies it to the EC2 instance via SCP, then restarts the `bireca` systemd service. Required repository secrets:

- `EC2_HOST` — public IP / hostname of the server
- `EC2_SSH_KEY` — private SSH key for the `ubuntu` user

### Frontend (Vercel)

Vercel detects pushes to `main` and deploys automatically. GitHub Actions notifies Vercel of the CI status before each deployment proceeds.

---

## Docker (Backend)

```bash
cd backend
docker build -t bireca-api .
docker run -p 8080:8080 \
  -e SMTP_FROM=you@gmail.com \
  -e SMTP_PASS=your_app_password \
  bireca-api
```