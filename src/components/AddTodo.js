import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    render() {
        return (
          <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Add to do..."
              style={{ flex: "10" }}
              value = {this.state.title}
              onChange={this.onChange}
            />
            <input type="submit" value="Submit" style={{ flex: "1" }} />
          </form>
        );
    }

    onChange = (e) => this.setState({title: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }
}

export default AddTodo
