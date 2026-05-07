import { useParams } from "react-router-dom";

function ProjectDetail({ projects }) {
  const { id } = useParams();

  const project = projects.find(
    (project) => project.id === Number(id)
  );

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <section>
      <h2>{project.title}</h2>

      <img
        src={project.image}
        alt={project.title}
      />

      <p>{project.description}</p>
    </section>
  );
}

export default ProjectDetail;