import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";


import projectsData from "./data/Project";

function App() {
  const [projects, setProjects] = useState(projectsData);
  const [searchTerm, setSearchTerm] = useState("");

  function addProject(newProject) {
    setProjects([...projects, newProject]);
  }

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
              projects={filteredProjects}
              addProject={addProject}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
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
