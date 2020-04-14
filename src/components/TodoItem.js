import React, { useState } from "react";
import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free";

function TodoItem(props) {
  const [text, setText] = useState(props.todo.title);

  const textClassName =
    "w-full truncate px-2 py-2 font-bold text-lg" +
    (props.todo.completed ? " line-through text-gray-500" : " text-gray-800");

  const onSubmit = (e) => {
    e.preventDefault();
    props.updateTitle(props.todo.id, text);
  };

  return (
    <div className="max-w-md min-w-full rounded shadow-lg p-3 mx-auto my-3 md:my-5">
      <div className="">
        {/* <p className="break-words">{props.todo.title}</p> */}
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className={textClassName}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </form>
      </div>
      <div className="flex flex-row-reverse items-center">
        <div className="flex-shrink-0 px-1">
          <button
            className="text-md font-normal text-gray-400 hover:text-red-500 focus:outline-none"
            onClick={props.deleteTodo.bind(this, props.todo.id)}
          >
            <i className="fas fa-trash fa-lg"></i>
          </button>
        </div>
        <div className="flex-shrink-0 px-2">
          <button
            className="text-md font-normal text-gray-400 hover:text-green-500 focus:outline-none"
            onClick={props.toggleComplete.bind(this, props.todo.id)}
          >
            <i className="fas fa-check-circle fa-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
