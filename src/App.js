import React from 'react';
import {v4 as uuid} from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import AboutApi from './components/pages/AboutApi';

import './App.css';

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/">
            <AddTodo addTodo={this.addTodo} />
            <Todos
              todos={this.state.todos}
              toggleComplete={this.toggleComplete}
              deleteTodo={this.deleteTodo}
            />
          </Route>
          <Route path="/api">
            <AboutApi />
          </Route>
        </div>
      </Router>
    );
  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      }),
    });
  }

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    })
    /* axios.post(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: [...this.state.todos.filter((todo) => todo.id !== id)],
      })) */
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })


    /* axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
      .then(res => this.setState({
        todos: [...this.state.todos, res.data]
      })) */
  }
}

export default App;
