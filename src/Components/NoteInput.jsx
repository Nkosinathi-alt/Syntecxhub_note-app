import React, { useState, useRef, useEffect } from "react";
import "./NoteStyle.css"

const NoteInput = ({ onAdd, editingNote }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (editingNote) {
      setInput(editingNote.text);
      inputRef.current.focus();
    }
  }, [editingNote]);

  const handleAdd = () => {
    if (input.trim() === "") return;
    onAdd(input);
    setInput("");
  };

  return (
    <div className="note">
      <textarea
        ref={inputRef}
        cols={40}
        rows={5}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write a note..."
        maxLength={100}
      />
      <button className="button" onClick={handleAdd}>
        {editingNote ? "Save" : "+ Add"}
      </button>
    </div>
  );
};

export default NoteInput;
