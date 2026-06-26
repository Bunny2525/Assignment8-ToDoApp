# Assignment 8 – Full-Stack To-Do List App (Resubmission)

## 📌 Introduction
This assignment required building and deploying a complete full-stack To-Do List application. 
The goal was to separate the environments completely: building a RESTful API with Node.js and Express for the backend, and a dynamic Single Page Application (SPA) with React for the frontend, all connected to a persistent MongoDB Atlas database.

---

## 🎯 Learning Outcomes
- Designed and implemented **RESTful APIs** using Node.js and Express.
- Connected the backend to **MongoDB Atlas** using modern `async/await` syntax.
- Managed frontend UI state seamlessly using React hooks (`useState`, `useEffect`).
- Implemented custom **error-handling middleware** and proper HTTP status codes.
- Successfully managed and deployed a **split-architecture** codebase to cloud platforms.

---

## ⚡ Challenges Faced
- **Deployment Conflicts:** Initially, Netlify failed to build because it was reading the root backend `package.json`. I solved this by completely restructuring the directories, ensuring the frontend and backend had isolated folders and dependency trees.
- **React Build Errors:** I encountered an "Exit Code 127" missing build script error. I fixed this by manually reconstructing the React dependency tree (`react`, `react-scripts`) and building the `public/index.html` entry point from scratch.
- **State Synchronization:** At first, I used `window.location.reload()` to update the UI after adding a task. I fixed this by refactoring the frontend to trigger React state updates immediately after Axios API calls, ensuring true SPA behavior.
- **Backend Integration:** Passing the mentor's strict backend requirements required manually rewriting all controller functions from scratch to prove my understanding of data flow between the server and the database.

---

## ✅ Final Output
- **Full CRUD Operations:** Users can add, view, update, and delete tasks dynamically.
- **Live Search:** Search bar filters tasks using a custom `/api/tasks/search` endpoint.
- **Error Handling:** Backend returns precise HTTP status codes (400, 404, 500) and clean JSON error messages.
- **API Proof:** All 6 backend routes were fully tested and documented in the `postman-screenshots` folder.
- **Deployed Split Architecture:** Frontend hosted on Netlify, backend ready for cloud hosting.

---

## 📂 Project Structure
```text
Assignment8/
├── backend/
│   ├── server.js
│   ├── config/db.js
│   ├── models/Task.js
│   ├── controllers/taskController.js
│   ├── routes/taskRoutes.js
│   ├── middleware/errorHandler.js
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskList.js
│   │   │   ├── TaskForm.js
│   │   │   └── TaskItem.js
│   │   ├── App.js
│   │   ├── api.js
│   │   ├── index.js
│   │   └── styles.css
│   ├── package.json
│   └── README.md
│
└── README.md

🚀 How to Run
1. Run the Backend:

Open a terminal in the backend folder.

Run npm install.

Create a .env file and add MONGO_URI and PORT=5000.

Start the server:

Bash
npm start
2. Run the Frontend:

Open a separate terminal in the frontend folder.

Run npm install.

Ensure src/api.js points to http://localhost:5000/api/tasks for local testing.

Start the React app:

Bash
npm start
🌐 Deployment
Live Frontend (Netlify): https://daily-todo-live.netlify.app

GitHub Repository: https://github.com/Bunny2525/Assignment8-ToDoApp.git