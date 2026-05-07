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
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-detail-light border border-detail/20 rounded-card shadow-card p-6">
        <h1 className="text-2xl font-bold mb-4">
          {project.title}
        </h1>

        <img
          src={project.image}
          className="w-full rounded-card mb-4"
        />

        <p className="text-text-secondary">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default ProjectDetail;