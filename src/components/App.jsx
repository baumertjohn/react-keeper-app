import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map((note) => (
        <Note
          key={note.key}
          noteTitle={note.title}
          noteContent={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
