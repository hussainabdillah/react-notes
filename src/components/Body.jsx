import React from "react";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";

function Body({ notes, addNotes, onDelete, onArchive }) {
  return (
    <div className="note-app__body">
      <NotesInput addNotes={addNotes} />
      <h2>Active Notes</h2>
      <NotesList
        notesList={notes.filter((note) => note.archived === false)}
        onDelete={onDelete}
        onArchive={onArchive}
      />
      <h2>Archives</h2>
      <NotesList
        notesList={notes.filter((note) => note.archived === true)}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}

export default Body;
