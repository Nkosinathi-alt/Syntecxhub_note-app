import React from "react";
import NoteItem from "./NoteItem";


const NotesList = ({ notes, onDelete, onEdit }) => {
  if (notes.length === 0) {
    return <p className="empty">No notes yet...</p>;
  }

  return (
    <div className="note">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
export default NotesList

