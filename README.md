# Full-Stack To-Do List App (Assignment 8 resubmission)

## Deployment Links
* **Live Frontend (Netlify):** https://daily-todo-live.netlify.app
* **GitHub Repository:** https://github.com/Bunny2525/Assignment8-ToDoApp.git

## Overview
This repository contains my completely manually rebuilt full-stack To-Do List application. I separated the environments, building a RESTful API with Node.js/Express for the backend and a dynamic Single Page Application (SPA) with React for the frontend. 

## Project Structure

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

## For this resubmission, I rewrote major sections of the codebase from scratch to deepen my understanding of data flow:

1. Backend Rewrite: Rewrote controller functions entirely in my own style and converted the MongoDB Atlas connection to use modern async/await syntax.

2. Search Functionality: Built a custom /api/tasks/search endpoint and wired it to a dynamic search bar in the React UI.

3. Error Handling: Implemented a custom Express error middleware that catches failures and returns appropriate HTTP status codes (400, 404, 500) with clean JSON responses.

4. Frontend State Integration: Removed all window.location.reload() hacks. The app now strictly manages data using React hooks (useState, useEffect), updating the DOM seamlessly after Axios calls.

5. API Testing: Extensively tested all 6 backend routes. Screenshots are documented in the postman-screenshots folder.

## Deployment & Debugging Journey

1. Deploying the split architecture was the most challenging and rewarding part of this project. I manually debugged several major build failures:

2. Dependency Conflicts: Netlify initially failed because it was reading the root backend package.json. I fixed this by completely restructuring the directories and ensuring the frontend folder had its own dedicated React package.json.

3. Missing Build Scripts (Exit Code 127): I had to manually reconstruct the React dependency tree (react, react-dom, react-scripts) so the deployment server knew how to compile the frontend code.

4. React Entry Points: The CI/CD pipeline crashed searching for core HTML files. I manually built the public/index.html file (wiring the <div id="root">) and connected it via src/index.js.