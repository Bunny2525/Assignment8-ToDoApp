# Backend – Assignment 8 To‑Do List App

## Overview
This backend is built with **Node.js, Express, and MongoDB Atlas**. It provides RESTful APIs for managing tasks in the To‑Do List application.

## Features
- CRUD operations for tasks (Create, Read, Update, Delete).
- MongoDB Atlas integration for persistent storage.
- Modular structure: models, controllers, routes, middleware.
- Environment variables managed via `.env` (kept private).
- Error handling middleware for clean JSON responses.
- CORS enabled for frontend integration.

## Setup
1. Clone the repository.
2. Run `npm install`.
3. Create a `.env` file:

MONGO_URI=your-mongodb-uri
PORT=5000

Code
4. Start server:

## API Endpoints
POST /api/tasks → Add a new task

GET /api/tasks → Get all tasks

GET /api/tasks/:id → Get one task

PUT /api/tasks/:id → Update task

PATCH /api/tasks/:id/complete → Mark task complete

DELETE /api/tasks/:id → Delete task

## Notes
Used controllers for logic, routes for mapping, and models for MongoDB schema.

Added error handling middleware for clean responses.

Tested all endpoints with Postman.

## Reflection
While building this backend, I understood how to connect Express routes with MongoDB models. The main challenge was handling errors properly and keeping the code modular. Once I separated controllers and routes, the project became easier to maintain.