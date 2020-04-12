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
    <div className="max-w-lg overflow-hidden my-10 mx-auto rounded-full shadow-lg">
      <form className="w-full max-w-lg" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Add to do ..."
          className="bg-gray-200 border-none w-full text-gray-800 font-bold text-lg mr-3 py-5 px-10  focus:outline-none placeholder-gray-600 focus:bg-gray-300"
          value={title}
          onChange={onChange}
        />
      </form>
    </div>
  );
}

export default AddTodo;
