import React, { useState } from "react";

function NotesInput({ addNotes }) {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    length: 0,
  });

  const onTitleChangeEventHandler = (event) => {
    if (event.target.value.length <= 50) {
      setFormData({
        ...formData,
        title: event.target.value,
        length: event.target.value.length,
      });
    } else {
      alert("The maximum length is 50 characters!");
    }
  };

  const onBodyChangeEventHandler = (event) => {
    setFormData({
      ...formData,
      body: event.target.value,
    });
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    if (formData.title === "") {
      alert("Title cannot be empty!");
    } else if (formData.body === "") {
      alert("Note body cannot be empty!");
    } else {
      const newData = {
        id: +new Date(),
        title: formData.title,
        body: formData.body,
        archived: false,
        createdAt: new Date(),
      };
      const result = addNotes(newData);
      if (result) {
        alert("Notes successfully added");
        setFormData({
          ...formData,
          title: "",
          body: "",
          length: 0,
        });
      } else {
        alert("Failed adding notes");
      }
    }
  };

  return (
    <form className="note-input">
      <h2>Create Notes</h2>
      <p className="note-input__title__char-limit">Remaining characters: {50 - formData.length}</p>
      <input
        className="note-input__title"
        type="text"
        placeholder="Notes Title ..."
        required
        name="title"
        value={formData.title}
        onChange={onTitleChangeEventHandler}
      />
      <textarea
        className="note-input__body"
        type="text"
        placeholder="What's your ideas ..."
        required
        name="body"
        value={formData.body}
        onChange={onBodyChangeEventHandler}
      ></textarea>
      <button type="submit" onClick={onSubmitEventHandler}>
        Submit Notes
      </button>
    </form>
  );
}

export default NotesInput;
