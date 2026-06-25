# Backend – Assignment 8 To-Do List

## Overview
This is the backend server for my To-Do List application. It is built using Node.js, Express, and MongoDB Atlas, providing RESTful APIs to manage tasks from the frontend.

## Features
- **CRUD Operations:** Create, read, update, and delete tasks seamlessly.
- **Search:** Custom endpoint (`/api/tasks/search?q=`) to filter tasks dynamically by keyword.
- **Database:** Connected to MongoDB Atlas for persistent data storage using strict `async/await` syntax.
- **Architecture:** Kept the codebase modular by separating database models, controllers, routes, and middleware.
- **Error Handling:** Added a custom middleware to catch bad requests and send precise HTTP status codes (e.g., 400 for bad input, 404 for not found) alongside clean JSON error messages back to the client.
- **CORS:** Enabled Cross-Origin Resource Sharing so the React frontend can consume the API without security blocks.

## API Endpoints
All endpoints were manually tested in Postman.
* `POST /api/tasks` → Add a new task
* `GET /api/tasks` → Get all tasks
* `GET /api/tasks/search?q=keyword` → Search tasks 
* `GET /api/tasks/:id` → Get a single task by ID
* `PUT /api/tasks/:id` → Update task details or mark complete
* `DELETE /api/tasks/:id` → Delete task

## Local Setup Instructions
1. Clone the repository and navigate into the `backend` directory.
2. Run `npm install` to download all the required packages (`express`, `mongoose`, `cors`, `dotenv`).
3. Create a `.env` file in this folder and add your environment variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000

## Start the development server:

Bash
npm start