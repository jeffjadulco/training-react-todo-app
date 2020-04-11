import React, { useState } from "react";

function AddTodo(props) {
  const [title, setTitle] = useState("");

  const onChange = (e) => setTitle(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    props.addTodo(title);
    setTitle("");
  };

  return (
    <form className="field" onSubmit={onSubmit}>
      <div className="field is-grouped">
        <input
          type="text"
          name="title"
          placeholder="Add to do..."
          // style={{ flex: "10" }}
          className="input"
          value={title}
          onChange={onChange}
        />
        <input type="submit" value="Submit" className="button is-primary" />
      </div>
    </form>
  );
}

export default AddTodo;
