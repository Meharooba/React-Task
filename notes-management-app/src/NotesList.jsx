import NoteCard from "./NoteCard";

function NotesList({ notes, updateNote, deleteNote }) {
  if (notes.length === 0) {
    return <p className="empty-message">No notes found.</p>;
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          updateNote={updateNote}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
}

export default NotesList;