import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-card shadow-card p-5 flex gap-4 items-center hover: border-primary hover:shadow-lg transition">
      
      <img
        src={project.image}
        className="w-16 h-16 rounded-lg object-cover border border-border"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-lg">
          {project.title}
        </h3>

        <p className="text-text-secondary text-sm">
          {project.description}
        </p>

        <Link
          to={`/project/${project.id}`}
          className="text-primary hover:text-primary-hover text-sm mt-2 inline-block"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;