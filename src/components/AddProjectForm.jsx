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
    <section className="form-section">
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Project description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default AddProjectForm;