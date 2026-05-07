import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className=" min-h-[70vh]
        flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-6xl font-bold text-header mb-4">
        404
      </h1>

      <h2 className="text-2xl font-semibold mb-2">
        Page Not Found
      </h2>

      <p className="text-text-secondary mb-6">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className=" bg-header hover:bg-indigo-700 text-white px-5 py-3 rounded-button transition ">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;