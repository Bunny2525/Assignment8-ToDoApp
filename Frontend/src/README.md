# Frontend – Assignment 8 To-Do List

## Overview
This is the React frontend for my To-Do List application. It consumes the RESTful APIs from my Node/Express backend and provides a clean, responsive user interface for managing daily tasks.

## Key Features & UI Decisions
* **Full Task Management:** Users can add, view, update (mark complete), and delete tasks dynamically.
* **Search Functionality:** Integrated a live search bar that triggers the backend search API to filter data in real-time.
* **API Integration:** Implemented Axios for all HTTP requests to ensure reliable, promise-based communication with the live Render backend server.
* **Smooth State Management:** Leveraged React hooks (`useState`, `useEffect`) to manage and sync the UI state with the database without page refreshes.
* **Error Handling:** Built-in error states and UI messages that display cleanly if an API call fails or times out.

## Reflection & Biggest Win
The biggest learning curve on the frontend was figuring out how to properly keep the React UI in sync with the backend database without breaking the user experience. 

Initially, I hacked it together by relying on `window.location.reload()` to force the browser to refresh after a user added or deleted a task. I quickly realized this completely defeats the purpose of using React as a Single Page Application (SPA). I refactored my components to trigger state updates directly after a successful Axios call. Fixing this was a massive "aha!" moment—removing the hard refresh made the app feel instantly faster, smoother, and much more professional. 

## Local Setup Instructions
1. Clone the repository and open your terminal directly in the `frontend` folder.
2. Run `npm install` to download all React dependencies (`react`, `react-dom`, `axios`).
3. Ensure the API connection in `src/api.js` points to the live backend URL:
   ```javascript
   const API = axios.create({ 
     baseURL: '[https://assignment8-backend.onrender.com/api/tasks](https://assignment8-backend.onrender.com/api/tasks)' 
   });

## Start the local development server:

Bash
npm start