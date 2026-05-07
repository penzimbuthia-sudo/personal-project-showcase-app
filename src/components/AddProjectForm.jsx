import { useState } from "react";

function AddProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      title,
      description,
      image: "https://via.placeholder.com/100",
    };

    addProject(newProject);

    setTitle("");
    setDescription("");
  }

  return (
    <section className="bg-form-light border border-form/20 rounded-card p-6 shadow-card">
      <h2 className="text-lg font-semibold mb-4">Add Project</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
        className="w-full bg-input-bg border border-border rounded-input p-3 focus:outline-none focus:ring-0 "
          type="text"
          placeholder="Project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
        className="w-full bg-input-bg border border-border rounded-input p-3 focus:outline-none focus:ring-0 "
          placeholder="Project description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="bg-form hover:bg-sky-200 text-white px-4 py-2 rounded-button transition" type="submit">Add</button>
      </form>
    </section>
  );
}

export default AddProjectForm;