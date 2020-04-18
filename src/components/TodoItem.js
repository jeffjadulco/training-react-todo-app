import React from "react";
import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free";

function TodoItem(props) {
  const textClassName =
    "w-full break-words px-2 py-2 mb-4 font-bold text-lg" +
    (props.todo.completed ? " line-through text-gray-500" : " text-gray-800");

  const onInput = (e) => {
    props.updateTitle(props.todo.id, e.target.innerText);
  };

  return (
    <div className="max-w-md min-w-full rounded shadow-lg p-3 mx-auto my-3 md:my-5 relative">
      <div className="">
        <p
          className={textClassName}
          contentEditable="true"
          spellCheck="false"
          onBlur={onInput}
          suppressContentEditableWarning="true"
        >
          {props.todo.title}
        </p>
      </div>
      <div className="flex flex-row-reverse items-center absolute bottom-0 right-0 mb-3 mr-3">
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
