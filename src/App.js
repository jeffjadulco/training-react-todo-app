import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import AboutApi from "./components/pages/AboutApi";
// import axios from "axios";
import { v4 as uuid } from "uuid";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faCheckCircle);

function App() {
  const [todos, setTodos] = useState([]);

  // Initially get cached todo items from localStorage
  useEffect(() => {
    const cached = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(cached, []);
  }, []);

  // Update localStorage when 'todos' changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  /* useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => setTodos(res.data));
  }, []); */

  // Toggle Todo as Completed or Not
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    );
  };

  // Add a New Todo
  const addTodo = (title) => {
    if (!title) return;
    const newTodo = {
      id: uuid(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);

    /* const newTodo = {
      id: uuid(),
      title,
      completed: false,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/todos", newTodo)
      .then((res) => setTodos([...todos, res.data])); */
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);

    /* axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => setTodos([...todos.filter((todo) => todo.id !== id)])); */
  };

  const updateTitle = (id, title) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.title = title;
        return todo;
      })
    );
  };

  return (
    <Router>
      <div className="container mx-auto px-4">
        <Route exact path="/">
          <AddTodo addTodo={addTodo} />
          <Todos
            todos={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            updateTitle={updateTitle}
          />
        </Route>
        <Route path="/api">
          <AboutApi />
        </Route>
      </div>
    </Router>
  );
}

export default App;
