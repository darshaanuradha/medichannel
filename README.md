# MediChannel

MediChannel is a full-stack healthcare appointment management project built with a Next.js frontend, a Spring Boot backend, and a PostgreSQL database. The repository contains both the application foundation and the supporting project documentation for the MediChannel assignment.

## Overview

This project models a digital clinic workflow for:

- patient registration and profiles
- doctor profiles and specialisations
- appointment booking and session management
- consultations, payments, feedback, and notifications
- admin-facing notices and audit logging

The backend exposes REST APIs for health checks and CRUD operations, while the frontend demonstrates connectivity and interactions between the UI, API, and database.

## Project structure

```text
medichannel/
├── backend/                  # Spring Boot API server
│   ├── src/main/java/        # Java source code
│   ├── src/main/resources/   # application.properties and Flyway migration
│   ├── src/test/java/        # Spring Boot tests
│   ├── pom.xml              # Maven build configuration
│   └── mvnw / mvnw.cmd      # Maven wrapper
├── frontend/                 # Next.js frontend app
│   ├── app/                 # Pages and routes
│   ├── lib/                 # API client helpers
│   ├── package.json         # Node scripts and dependencies
│   └── README.md            # Default Next.js starter documentation
├── database/
│   └── schema.sql           # PostgreSQL schema for the MediChannel domain model
├── docs/                    # Assignment docs and architecture artifacts
├── README.md                # Project overview and setup instructions
└── .gitignore
```

## Tech stack

### Frontend
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

### Backend
- Java 25 (configured in backend/pom.xml)
- Spring Boot 4.1.2
- Spring Web MVC
- Spring Data JPA
- Spring Security
- Flyway
- PostgreSQL JDBC

### Database
- PostgreSQL 14+
- SQL schema defined in `database/schema.sql`
- Flyway migration in `backend/src/main/resources/db/migration/`

## Current application behaviour

The repository currently includes a working full-stack foundation and a CRUD demo screen:

- `frontend/app/page.tsx` checks backend and database reachability from the UI.
- `frontend/app/crud-test/page.tsx` lets users create, read, update, and delete records through the backend API.
- `backend/src/main/java/com/medichannel/backend/controller/HealthController.java` exposes:
  - `/api/v1/health`
  - `/api/v1/db-health`
- `backend/src/main/java/com/medichannel/backend/controller/CrudTestController.java` exposes CRUD endpoints under `/api/v1/crud-tests`.
- `database/schema.sql` contains the broader MediChannel domain schema for users, patients, doctors, rooms, sessions, appointments, consultations, payments, notifications, feedback, notices, and audit logs.

## Prerequisites

Before running the project locally, install:

- Node.js 20+
- npm
- Java 25 JDK
- PostgreSQL 14+
- Git

## Configuration

### Backend environment

The backend reads database configuration from environment variables in `backend/src/main/resources/application.properties`:

- `DB_URL` (default: `jdbc:postgresql://localhost:5432/medichannel_dev`)
- `DB_USERNAME` (default: `postgres`)
- `DB_PASSWORD`

Example:

```bash
export DB_URL=jdbc:postgresql://localhost:5432/medichannel_dev
export DB_USERNAME=postgres
export DB_PASSWORD=your_password
```

### Frontend environment

The frontend expects a public API URL defined in `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api/v1
```

## Run the project locally

### 1) Start PostgreSQL

Create a database named `medichannel_dev` and ensure the database user has access.

Example:

```bash
createdb medichannel_dev
```

### 2) Start the backend

```bash
cd backend
./mvnw spring-boot:run
```

The Spring Boot app runs on:
- http://localhost:8080

### 3) Start the frontend

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

The Next.js app runs on:
- http://localhost:3000

### 4) Verify the app

Open:
- http://localhost:3000 for the main health/status page
- http://localhost:3000/crud-test for the CRUD demo page

The frontend checks:
- backend health at `/api/v1/health`
- database connectivity at `/api/v1/db-health`

## API endpoint summary

### Backend health
- `GET /api/v1/health`
- `GET /api/v1/db-health`

### CRUD demo endpoints
- `POST /api/v1/crud-tests`
- `GET /api/v1/crud-tests`
- `GET /api/v1/crud-tests/{id}`
- `PUT /api/v1/crud-tests/{id}`
- `DELETE /api/v1/crud-tests/{id}`

## Database notes

The project includes a domain-focused schema in `database/schema.sql` that covers the MediChannel business model, including:

- users and access roles
- patients and doctors
- doctor specialisations
- rooms and appointment sessions
- appointments and consultations
- payments, notifications, and feedback
- notices and audit logs

The runtime migration in `backend/src/main/resources/db/migration/V1__create_crud_test_records.sql` is used for the CRUD test table used by the frontend demo.

## Documentation

Project documentation and supporting artifacts are located in `docs/`, including:

- assignment brief
- ER diagram
- architecture/network references
- SSH connection notes

## Notes

- The root `frontend/README.md` is the default Next.js scaffold and is not the canonical project overview.
- This repository currently contains a functional full-stack starter plus the healthcare-domain schema and assignment materials.
- The project is suitable for continuing into a full MediChannel production implementation by expanding the Spring Boot service and repository layers around the database design.

## Suggested next steps

Potential follow-up work includes:

1. implementing authentication and role-based access
2. building patient, doctor, and appointment domain services
3. integrating secure encryption for sensitive personal data
4. adding real admin dashboards and booking flows
5. expanding API validation and unit/integration tests

