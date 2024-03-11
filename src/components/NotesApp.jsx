import React from "react";
import { getInitialData } from "../utils/index";
import Header from "./Header";
import Body from "./Body";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      unfilteredNotes: getInitialData(),
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onSearchHandler(text) {
    if (text.length !== 0 && text.trim() !== "") {
      this.setState({
        notes: this.state.unfilteredNotes.filter((note) =>
          note.title.toLowerCase().includes(text.toLowerCase())
        ),
      });
    } else {
      this.setState({
        notes: this.state.unfilteredNotes,
      });
    }
  }

  onDeleteHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter((note) => note.id !== id),
        unfilteredNotes: prevState.unfilteredNotes.filter(
          (note) => note.id !== id
        ),
      };
    });
  }

  onAddNotesHandler(newNoteData) {
    if (true) {
      this.setState((prevState) => {
        return {
          notes: [newNoteData, ...prevState.notes],
          unfilteredNotes: [newNoteData, ...prevState.unfilteredNotes],
        };
      });
      return {
        error: false,
        message: "Success!",
      };
    }
  }

  onArchiveHandler(id) {
    const noteToModify = this.state.unfilteredNotes.filter((note) => note.id === id)[0];
    const modifiedNote = { ...noteToModify, archived: !noteToModify.archived };
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes.filter((note) => note.id !== id),
          modifiedNote,
        ],
        unfilteredNotes: [
          ...prevState.unfilteredNotes.filter((note) => note.id !== id),
          modifiedNote,
        ],
      };
    });
  }

  render() {
    return (
      <div>
        <Header onSearch={this.onSearchHandler} />
        <Body
          notes={this.state.notes}
          addNotes={this.onAddNotesHandler}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
    );
  }
}

export default NotesApp;
