import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function Todos(props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 col-gap-8 row-gap-0 px-2">
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={props.toggleComplete}
          deleteTodo={props.deleteTodo}
        />
      ))}
    </div>
  );
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
