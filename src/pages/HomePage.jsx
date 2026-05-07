import AddProjectForm from "../components/AddProjectForm";
import SearchBar from "../components/SearchBar";
import ProjectList from "../components/ProjectList";

function HomePage({children}) {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {children}
      <AddProjectForm />
      <SearchBar />
      <ProjectList />
    </div>
  );
}

export default HomePage;