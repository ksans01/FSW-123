import React, {useState} from "react";
import './App.css';
import TodoList from './TodoList.js';
import {list} from './STORE.js'

function App() {

  const [todos, setTodos] = useState([list]);

  console.log(list)

  const completeTodo = id => {
    const temporaryTodos = [...todos];
    const index = temporaryTodos.findIndex(todo => todo.id);
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted; 
    setTodos(temporaryTodos);
  }

  const deleteTodo = (id) => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos)
  }

  return (
    <>
    <TodoList todos = {list} completeTodo={completeTodo} deleteTodo={deleteTodo} />
    </>
);
  
}

export default App;


// to run app type into terminal "npm start"
// wait a minute for page to open up