# 📝 To-Do List App

A sleek and minimal To-Do List web application built with **React**, **Vite**, and **Tailwind CSS**. This personal project was developed to showcase front-end development skills, efficient state management using `useReducer`, and context API, with a focus on user-friendly UI/UX and persistent local storage.

---

## 🚀 Features

- ✅ Add tasks with **title**, **category**, and **priority**
- 📂 Categories: _Personal_, _Work_, _Shopping_
- 🔥 Priorities: _Low_, _Medium_, _High_
- 📌 Mark tasks as completed
- 🗑️ Remove tasks
- 💾 Data persists in **localStorage**
- 🎨 Responsive UI with **Tailwind CSS**
- ⚡ Built using **Vite** for fast development

---

## 🧠 Tech Stack

- **React** (Functional Components, Hooks)
- **Vite** (Fast build tool)
- **Tailwind CSS** (Utility-first CSS framework)
- **Context API + useReducer** (State management)
- **LocalStorage** (Data persistence)
- **React Icons** (UI icons)

---

## 📂 Folder Structure

src/
│
├── components/
│ ├── TaskForm.jsx
│ ├── TaskItem.jsx
│ └── TaskList.jsx
│
├── context/
│ └── TaskContext.jsx
│
├── App.jsx
└── main.jsx

---

## 🧪 How It Works

- Tasks are stored in a centralized state using `useReducer`.
- The state is shared across components using `TaskContext`.
- On every state update, tasks are stored in `localStorage`.
- Tasks are retrieved from `localStorage` on app load.

---

## 📦 Installation

- Clone the repository
  git clone https://github.com/utheshni/todo-list.git

- Navigate into the project directory
  cd todo-list

- Install dependencies
  npm install

- Run the app
  npm run dev

---

## 📄 License

This project is licensed under the MIT License..

---

## 🙋‍♀️ About Me

I’m a recent graduate passionate about front-end development. This is one of my portfolio projects to showcase my skills in React, Tailwind, and modern web development.

If you liked this project, feel free to ⭐ star it!

---

## 📬 Contact

Email: utheshni@gmail.com
