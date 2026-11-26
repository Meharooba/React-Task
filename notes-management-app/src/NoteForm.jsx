import { useState } from "react";

function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Please fill in both fields.");
      return;
    }

    addNote(title, description);

    setTitle("");
    setDescription("");
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
  };

  return (
    <div className="form-container">
      <h2>Create a Note</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Note Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <p className="character-count">
          Characters: {description.length}
        </p>

        <div className="form-buttons">
          <button type="submit" className="create-btn">
            Create Note
          </button>

          <button type="button" className="clear-btn" onClick={clearForm}>
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
}

export default NoteForm;