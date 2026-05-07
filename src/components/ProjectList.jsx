import ProjectCard from "./ProjectCard";

function ProjectList({
  projects = [],
  deleteProject,
}) {
  return (
    <section className="grid gap-4">
      {projects.length === 0 ? (
        <p className="text-text-secondary text-center">
          No projects found
        </p>
      ) : (
        // Loop through all projects and render ProjectCard components
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            deleteProject={deleteProject}
          />
        ))
      )}
    </section>
  );
}

export default ProjectList;