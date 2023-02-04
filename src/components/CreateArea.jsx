import React, { useState } from "react";

function CreateArea(props) {
  const [noteInput, setNoteInput] = useState({
    title: "",
    content: "",
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setNoteInput((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function addNote(event) {
    props.onAdd(noteInput);
    setNoteInput({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleInput}
          name="title"
          value={noteInput.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleInput}
          name="content"
          value={noteInput.content}
          placeholder="Take a note..."
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
