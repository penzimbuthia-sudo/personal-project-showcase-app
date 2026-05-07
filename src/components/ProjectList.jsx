import ProjectCard from "./ProjectCard";

function ProjectList({ projects = [] }) {
  return (
    <section className="grid gap-4">
        {projects.length === 0 ? (
        <p className="text-text-secondary text-center">
          No projects found
        </p>
      ) : (
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))
      )}
    </section>
  );
}

export default ProjectList;
