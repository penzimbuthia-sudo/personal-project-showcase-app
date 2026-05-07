import { Link } from "react-router-dom";
import { X } from "lucide-react";

function ProjectCard({ project, deleteProject }) {
  return (
    <div
      className=" bg-white rounded-card shadow-card p-5 hover:shadow-lg transition relative">
      <button
      // Event handler for deleting a project
        onClick={() => deleteProject(project.id)}
        className="absolute top-4 right-4 text-danger hover:text-danger-hover transition">
        <X size={20} />
      </button>

      <h3 className="text-xl font-semibold mb-2">
        {project.title}
      </h3>

      <p
        className=" text-text-secondary line-clamp-2 mb-4
        "
      >
        {project.description}
      </p>

      <Link
      // Link to dynamic project detail route
        to={`/project/${project.id}`}
        className=" text-form hover:underline font-medium ">
        View Details →
      </Link>
    </div>
  );
}

export default ProjectCard;