import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function ProjectDetail({ projects }) {
  const { id } = useParams();

  const project = projects.find(
    (project) => project.id === Number(id)
  );

  if (!project) {
    return (
      <div className=" min-h-[70vh] flex flex-col items-center justify-center text-center space-y-6 px-6">
      <h2 className="text-3xl font-bold">
        Project Not Found
      </h2>

      <Link
        to="/"
        className=" bg-header hover:bg-indigo-700 text-white px-5 py-3 rounded-button transition" >
        Return Home
      </Link>
    </div>
     
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div
        className="
          bg-detail-light
          rounded-card
          shadow-card
          p-8
        "
      >
        <h1 className="text-3xl font-bold mb-4">
          {project.title}
        </h1>

        <p className="text-text-main leading-7">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default ProjectDetail;