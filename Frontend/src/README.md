# Frontend – Assignment 8 To‑Do List App

## Overview
This frontend is built with **React**. It connects to the backend APIs and provides a user interface for managing tasks.

## Features
Add, view, update, and delete tasks

Axios used for API calls

State management with React hooks

Clean UI with responsive components

Add new tasks

View all tasks dynamically

Mark tasks complete

Delete tasks

Error messages shown when API fails

## Notes
Used Axios for API calls.

State updates handled with React hooks (useState, useEffect).

Avoided page reloads by refreshing state after API calls.

Reflection
The biggest learning here was how to connect React components with backend APIs. Initially I used window.location.reload(), but later I fixed it by updating state directly. This made the app smoother and more professional.

## Setup
1. Clone the repository.
2. Run `npm install`.
3. Update `src/api.js` with backend URL:
   ```js
   const API = axios.create({ baseURL: 'https://assignment8-backend.onrender.com/api/tasks' });
Start frontend:
npm start