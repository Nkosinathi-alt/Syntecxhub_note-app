import React from "react";

const NoteItem = ({ note, onDelete, onEdit }) => {
  return (
    <div className="note">
      <div>{note.text}</div>
      <div>
        <button className="editBtn" onClick={() => onEdit(note)}>Edit</button>
        <button className="deleteBtn" onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    </div>
  );
};

export default NoteItem;
