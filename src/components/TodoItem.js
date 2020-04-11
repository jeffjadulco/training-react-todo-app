import React from 'react';
import PropTypes from 'prop-types'

function TodoItem(props) {

    const getStyle =  {
      textDecoration: props.todo.completed ? 'line-through' : 'none',
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted'
    }

    return (
        <div>
          <p style={getStyle}>
            <input
              type="checkbox"
              onChange={props.toggleComplete.bind(this, props.todo.id)}
            />{" "}
            {props.todo.title}
            <button
              style={btnStyle}
              onClick={props.deleteTodo.bind(this, props.todo.id)}
            >
              x
            </button>
          </p>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    padding: '2px 5px',
    border: 'none',
    borderRadius: '50%',
    float: 'right',
    cursor: 'pointer'
}

export default TodoItem
