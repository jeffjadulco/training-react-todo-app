import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TodoItem(props) {
  const textClassName =
    "card-header-title is-left" +
    (props.todo.completed ? " has-text-grey-light" : "");

  const textStyle = {
    textDecoration: props.todo.completed ? "line-through" : "",
  };

  const actionText = props.todo.completed ? "Undone" : "Mark as Done";

  const buttonStyle = props.todo.completed
    ? "card-footer-item button"
    : "card-footer-item button is-primary is-outlined";

  return (
    <div className="column is-half">
      <div className="card">
        <div className="card-header">
          {/* <input
            type="checkbox"
            className="checkbox"
            onChange={props.toggleComplete.bind(this, props.todo.id)}
            defaultChecked={props.todo.completed}
          /> */}
          <div className={textClassName} style={textStyle}>
            {props.todo.title}
          </div>
        </div>
        <div className="card-footer">
          <button
            className="card-footer-item button is-right is-dark is-inverted"
            onClick={props.toggleComplete.bind(this, props.todo.id)}
          >
            <span class="icon is-small has-text-primary">
              <FontAwesomeIcon icon="check-circle" />
            </span>
          </button>
          <button
            className="card-footer-item button is-right is-dark is-inverted"
            onClick={props.deleteTodo.bind(this, props.todo.id)}
          >
            <span class="icon is-small has-text-danger">
              <FontAwesomeIcon icon="trash" />
            </span>
          </button>
          {/* <button
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
          </button> */}
        </div>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
