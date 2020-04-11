import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import AboutApi from './components/pages/AboutApi';
import axios from 'axios';
import {v4 as uuid} from 'uuid';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  // Toggle Todo as Completed or Not
  const toggleComplete = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    }))
  };

  // Add a New Todo
  const addTodo = title => {
    if (!title) return;
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }

    setTodos([...todos, newTodo]);
  };

  // Delete Todo
  const deleteTodo = id => {
    setTodos([...todos.filter(todo => todo.id !== id)]);
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => setTodos(res.data));
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/">
          <AddTodo addTodo={addTodo} />
          <Todos
            todos={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        </Route>
        <Route path="/api">
          <AboutApi />
        </Route>
      </div>
    </Router>
  )
}

export default App;