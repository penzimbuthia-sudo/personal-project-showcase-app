import { useState } from "react";

function AddProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

     // Validation
    if (
      title.trim() === "" ||
      description.trim() === ""
    ) {
      setError(
        "Please fill in all fields."
      );
      return;
    }

    const newProject = {
      id: Date.now(),
      title,
      description,
    };

    addProject(newProject);

    setTitle("");
    setDescription("");
    setError("");
  }

  return (
    <section className="bg-form-light border rounded-card p-6 shadow-card">
      <h2 className="text-2xl font-bold mb-5">Add  New Project</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Error Message */}
        {error && (<p className="text-danger font-medium"> {error}</p>)}
        <input
        className="w-full bg-input-bg rounded-input p-3 outline-none"
          type="text"
          placeholder="Project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
        className="w-full bg-input-bg rounded-input p-3 outline-none resize-none "
          placeholder="Project description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="bg-form hover:bg-sky-600 text-white px-5 py-3 rounded-button transition" type="submit">Add Project</button>
      </form>
    </section>
  );
}

export default AddProjectForm;