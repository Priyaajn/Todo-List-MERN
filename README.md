Todo-List app using MERN contents:

# 📝 Fullstack TODO App (MERN Stack)

A fullstack TODO application built using the MERN stack (MongoDB, Express, React, Node.js). Users can add, update, mark as complete, and delete tasks.

This fullstack TODO application was created as a practical project to understand how real-world web applications are built using the MERN (MongoDB, Express, React, Node.js) stack. It simulates a task management system where users can organize their daily activities efficiently. The app demonstrates how frontend and backend systems interact using REST APIs and how data is stored and retrieved from a cloud database.

In real-world use, such an app can help individuals, teams, or organizations track tasks, manage productivity, and stay organized. It's a foundational structure that can be extended with features like user authentication, due dates, reminders, and project categories — making it a base for scalable, production-ready task management platforms.
---------------------------------------------------------------------------------------------------------------------------

## 🔧 Tech Stack :
Tools have been used are:

- 💻 Frontend: React
- 🌐 Backend: Node.js + Express
- 🛢️ Database: MongoDB Atlas (Cloud)
- 🔗 API calls: Axios
- 🧠 State: React Hooks (`useState`, `useEffect`)

----------------------------------------------------------------------------------------------------
## 🚀 Features

- ✅ Add new tasks
- ✅ View all tasks
- ✅ Mark tasks as completed
- ✅ Delete tasks
- ✅ MongoDB cloud storage
- ✅ Axios-powered API communication

-------------------------------------------------------------------------------------

## 📁 Project Structure

todo-fullstack/

├── todo-frontend/     
# React frontend
│   ├── public/

│   ├── src/

│   │   ├── App.js  
# Main component (UI + axios)
│   │   ├── index.js

│   │   └── ...
│   ├── package.json
# React dependencies

│   └── .gitignore        
# (auto-created by create-react-app)

├── todo-backend/  
# Node.js + Express backend
│   ├── server.js  
# Entry point for Express
│   ├── models/

│   │   └── Todo.js   
# Mongoose model
│   ├── routes/

│   │   └── todoRoutes.js   
# All API routes (CRUD)
│   ├── .env           
# ⚠️ NOT pushed to GitHub (contains secrets)
│   ├── .env.example  
# ✅ Pushed to GitHub (no secrets)
│   ├── package.json   
# Backend dependencies
│   └── .gitignore     
# Contains `.env`, `node_modules`

├── .gitignore      
# Root .gitignore
├── README.md       
# Full project description

----------------------------------------------------------------------------------------------

