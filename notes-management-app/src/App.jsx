import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import NoteForm from "./NoteForm";
import NotesList from "./NotesList";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, description) => {
    const newNote = {
      id: Date.now(),
      title,
      description,
      date: new Date().toLocaleDateString(),
    };

    setNotes([newNote, ...notes]);
  };

  const updateNote = (id, title, description) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, title, description } : note
      )
    );
  };

  const deleteNote = (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  const deleteAllNotes = () => {
    if (window.confirm("Are you sure you want to delete all notes?")) {
      setNotes([]);
    }
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="container">
        <NoteForm addNote={addNote} />

        <div className="notes-header">
          <h2>Your Notes ({notes.length})</h2>

          <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {notes.length > 0 && (
            <button className="delete-all" onClick={deleteAllNotes}>
              Delete All
            </button>
          )}
        </div>

        <NotesList
          notes={filteredNotes}
          updateNote={updateNote}
          deleteNote={deleteNote}
        />
      </div>
    </>
  );
}

export default App;