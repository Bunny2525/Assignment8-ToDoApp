# Backend – Assignment 8 To-Do List App

## Overview
This is the backend server for my To-Do List application. It is built using Node.js, Express, and MongoDB Atlas, providing RESTful APIs to manage tasks from the frontend.

## Features
- **CRUD Operations:** Create, read, update, and delete tasks.
- **Search:** Custom endpoint to filter tasks by keywords.
- **Database:** Connected to MongoDB Atlas for persistent data storage.
- **Architecture:** Kept the codebase modular by separating models, controllers, routes, and middleware.
- **Error Handling:** Added custom middleware to catch bad requests and send clean JSON error messages back to the user.
- **CORS:** Enabled so the React frontend can talk to the server without getting blocked.

## Setup Instructions
1. Clone the repository to your local machine.
2. Run `npm install` to download all the required packages.
3. Create a `.env` file in the root folder and add your environment variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000