import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";


import projectsData from "./data/Project";

function App() {
  // State for storing all projects
  const [projects, setProjects] = useState(() => {
    const savedProjects =
    localStorage.getItem("projects");

  return savedProjects
    ? JSON.parse(savedProjects)
    : projectsData;
  });

  // State for managing search input
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
  localStorage.setItem(
    "projects",
    JSON.stringify(projects)
  );
}, [projects]);

  // Function for adding a new project
  function addProject(newProject) {
    setProjects([...projects, newProject]);
  }

  // Function for deleting a project
  const deleteProject = (id) => {
  setProjects(
    projects.filter(
      (project) => project.id !== id
    )
  );
};

// Filter projects dynamically based on search input
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <div className="bg-bg-main min-h-screen">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              projects={projects}
              filteredProjects={filteredProjects}
              addProject={addProject}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              deleteProject={deleteProject}
            />
          }
        />

        <Route
          path="/project/:id"
          element={<ProjectDetail projects={projects} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
