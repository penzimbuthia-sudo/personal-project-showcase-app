import AddProjectForm from "../components/AddProjectForm";
import SearchBar from "../components/SearchBar";
import ProjectList from "../components/ProjectList";

function HomePage({
  projects,
  addProject,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <main>
      <AddProjectForm addProject={addProject} />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <ProjectList projects={projects} />
    </main>
  );
}

export default HomePage;