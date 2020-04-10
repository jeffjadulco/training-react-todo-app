import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    render() {
        const {id, title} = this.props.todo;
        return (
          <div>
            <p style={this.getStyle()}>
              <input
                type="checkbox"
                onChange={this.props.toggleComplete.bind(this, id)}
              />{" "}
              {title}
              <button
                style={btnStyle}
                onClick={this.props.deleteTodo.bind(this, id)}
              >
                x
              </button>
            </p>
          </div>
        );
    }

    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }
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
