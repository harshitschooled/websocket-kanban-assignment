Real-Time WebSocket Kanban Board

This is a simple real-time Kanban board application built using React, Node.js, and Socket.IO.  
It allows multiple users to add and view tasks instantly with live updates.

Project Overview

The application demonstrates how a frontend and backend can communicate in real time using WebSockets.  
Whenever a user adds a task, the update is immediately visible to all connected clients.

This project was created to practice:

- Building a full-stack application  
- Real-time communication using Socket.IO  
- Writing automated tests  
- Organizing a clean project structure  

Technology Stack

Frontend
- React with Vite  
- Socket.IO Client  
- Chart.js  

Backend
- Node.js  
- Express  
- Socket.IO  

Testing
- Playwright for end-to-end testing  
- Vitest for unit and integration testing  

Main Features

- Add tasks to a Kanban board  
- Real-time updates across browsers  
- Basic task categorization  
- Simple analytics chart  
- Automated UI testing  
- Modular and readable code  

Project Structure

root  
│── backend/        → Node + Socket.IO server  
│── frontend/       → React application  
│── tests/          → Playwright end-to-end tests  
│── playwright.config.js  
│── package.json  
│── README.md  

How to Run the Project

1. Clone the repository

git clone <repository-url>  
cd websocket-kanban-assignment  

2. Start the Backend

cd backend  
npm install  
npm start  

The backend will run on:  
http://localhost:5000  

3. Start the Frontend

Open a new terminal and run:

cd frontend  
npm install  
npm run dev  

The frontend will run on:  
http://localhost:5173  

Running Tests

To run Playwright end-to-end tests, use:

npx playwright test  

After running, you should see output similar to:

2 passed  

Environment Requirements

Make sure the following are installed on your system:

- Node.js (version 16 or above)  
- npm  
- Git  

Notes

- The project ignores node_modules and test artifacts using .gitignore  
- Both backend and frontend must be running for real-time updates  
- Tests expect the frontend to be running at http://localhost:5173  

Author

Harshit Kumar Singh  

License

This project was created for learning and academic purposes.
