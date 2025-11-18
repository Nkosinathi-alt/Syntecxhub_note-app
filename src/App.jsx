import { useState, useEffect } from "react";
import NotesList from "./Components/NoteList";
import NoteInput from "./Components/NoteInput";
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null); // Track note being edited

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes"));
    if (saved) setNotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    if (editingNote) {
      setNotes(
        notes.map((note) =>
          note.id === editingNote.id ? { ...note, text } : note
        )
      );
      setEditingNote(null); 
    } else {
      setNotes([...notes, { id: Date.now(), text }]);
    }
  };

  const editNote = (note) => {
    setEditingNote(note);
  };

 
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));

    if (editingNote && editingNote.id === id) {
      setEditingNote(null); 
    }
  };

  return (
    <div className="container">
      <h1 className="title">Notes</h1>

      <NoteInput onAdd={addNote} editingNote={editingNote} />

      <NotesList
        notes={notes}
        onDelete={deleteNote}
        onEdit={editNote}
      />
    </div>
  );
}

export default App;
