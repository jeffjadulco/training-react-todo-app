import React from "react";
import PropTypes from "prop-types";

function TodoItem(props) {
  const textSyle =
    "card-header-title is-left" +
    (props.todo.completed ? " has-text-grey-light" : "");

  const actionText = props.todo.completed ? "Undone" : "Mark as Done";

  const buttonStyle = props.todo.completed
    ? "card-footer-item button"
    : "card-footer-item button is-primary is-outlined";

  return (
    <div className="column is-one-third">
      <div className="card-header">
        {/* <input
          type="checkbox"
          className="checkbox"
          onChange={props.toggleComplete.bind(this, props.todo.id)}
          defaultChecked={props.todo.completed}
        /> */}
        <div className={textSyle}>{props.todo.title}</div>
      </div>
      <div className="card-footer">
        <button
          className={buttonStyle}
          onClick={props.toggleComplete.bind(this, props.todo.id)}
        >
          {actionText}
        </button>
        <button
          className="card-footer-item button is-danger is-outlined"
          onClick={props.deleteTodo.bind(this, props.todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
