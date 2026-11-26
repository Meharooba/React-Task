import { useState } from "react";

function NoteCard({ note, updateNote, deleteNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  const handleUpdate = () => {
    if (!title.trim() || !description.trim()) {
      alert("Please fill in both fields.");
      return;
    }

    updateNote(note.id, title, description);
    setIsEditing(false);
  };

  return (
    <div className="note-card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <p className="character-count">
            Characters: {description.length}
          </p>

          <div className="note-buttons">
            <button className="update-btn" onClick={handleUpdate}>
              Update Note
            </button>

            <button
              className="cancel-btn"
              onClick={() => {
                setTitle(note.title);
                setDescription(note.description);
                setIsEditing(false);
              }}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>

          <p className="note-description">{note.description}</p>

          <small>Created: {note.date}</small>

          <div className="note-buttons">
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>

            <button className="delete-btn" onClick={() => deleteNote(note.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default NoteCard;