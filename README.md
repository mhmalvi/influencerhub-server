# InfluencerHub Server

A full-stack influencer management platform with a monorepo structure containing both the Laravel backend API and a Next.js frontend application. This platform facilitates influencer discovery, campaign management, and collaboration tracking.

## Tech Stack

### Backend
- **PHP** ^7.3 | ^8.0
- **Laravel** ^8.75
- **Laravel Sanctum** for API authentication

### Frontend
- **Next.js** with React
- **Tailwind CSS** for styling

## Project Structure

```
influencerhub-server/
└── application/
    ├── backend/        # Laravel API application
    │   ├── app/        # Models, Controllers, Services
    │   ├── config/     # Configuration files
    │   ├── database/   # Migrations, factories, seeders
    │   ├── routes/     # API and web routes
    │   ├── resources/  # Views and raw assets
    │   └── tests/      # Automated tests
    └── frontend/       # Next.js client application
        ├── component/  # React components
        ├── pages/      # Next.js pages
        ├── public/     # Static assets
        └── styles/     # CSS stylesheets
```

## Getting Started

### Prerequisites

- PHP >= 7.3
- Composer
- Node.js & npm
- MySQL or compatible database

### Backend Setup

```bash
cd application/backend

# Install PHP dependencies
composer install

# Configure environment
cp .env.example .env
php artisan key:generate

# Run database migrations
php artisan migrate

# Start the server
php artisan serve
```

### Frontend Setup

```bash
cd application/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## Related

- [InfluencerHub Client](https://github.com/mhmalvi/influencerhub-client) — Standalone React frontend

## License

MIT