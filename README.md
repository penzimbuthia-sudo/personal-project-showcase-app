# Personal Project Showcase App

## Overview

Personal Project Showcase App is a React Single Page Application (SPA) that allows users to explore, search, add, and manage portfolio projects dynamically.

The application was built as a summative lab project to demonstrate React fundamentals including:

* Component hierarchy
* State management
* Event handling
* Props
* Client-side routing
* Dynamic rendering
* Responsive UI design

---

## Features

* View all projects on the landing page
* Search projects dynamically
* Add new projects using a form
* Delete projects
* View detailed project information
* Client-side routing with React Router
* Custom responsive UI built with Tailwind CSS v4 and shadcn/ui

---

## Technologies Used

* React
* Vite
* React Router DOM
* Tailwind CSS v4
* shadcn/ui
* Lucide React Icons

---

## Project Structure

src/
│
├── components/
│   ├── Header.jsx
│   ├── AddProjectForm.jsx
│   ├── SearchBar.jsx
│   ├── ProjectCard.jsx
│   └── ProjectList.jsx
│
├── pages/
│   ├── HomePage.jsx
│   ├── ProjectDetail.jsx
│   └── NotFound.jsx
│
├── data/
│   └── Project.js
│
├── App.jsx
├── main.jsx
└── index.css

---

## State Management

The application uses React's useState hook to:

* Store projects
* Manage search input
* Dynamically add projects
* Dynamically delete projects

---

## Routing

The application uses React Router for client-side routing.

Routes:

* `/` → Home page
* `/project/:id` → Project detail page
* `*` → 404 Not Found page

---

## Installation

1. Clone the repository

```bash
git clone git@github.com:penzimbuthia-sudo/personal-project-showcase-app.git
```

2. Navigate into the project directory

```bash
cd personal-project-showcase-app
```

3. Install dependencies

```bash
npm install
```

4. Start development server

```bash
npm run dev
```

---

## Future Improvements

* Local storage persistence
* Edit project functionality
* Dark mode
* API integration
* Project categories and filters

---

## Author

Penzi Mbuthia
