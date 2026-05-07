import AddProjectForm from "../components/AddProjectForm";
import SearchBar from "../components/SearchBar";
import ProjectList from "../components/ProjectList";

function HomePage({
  filteredProjects,
  addProject,
  searchTerm,
  setSearchTerm,
  deleteProject,

}) {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <AddProjectForm addProject={addProject} />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <ProjectList 
       projects={filteredProjects}
        deleteProject={deleteProject}
      />
    </div>
  );
}

export default HomePage;