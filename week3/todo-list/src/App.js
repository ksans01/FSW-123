import React, {useState} from "react";
import './App.css';
import TodoList from './TodoList.js';
import {list} from './STORE.js'

function App() {

  const [todos, setTodos] = useState([list]);

  console.log(list)

  const completeTodo = (e) => { 
    if(e) {
    const temporaryTodos = [...todos];
    const index = temporaryTodos.findIndex(todo => todo.id === e);
    let updatedTodo = {...temporaryTodos[index]};
    if(updatedTodo.isComplete){
      updatedTodo.isComplete = false}
      else{
        updatedTodo.isComplete = true
      }    
    temporaryTodos[index] = updatedTodo      
    setTodos(temporaryTodos);
    console.log(todos)
  }}

  const deleteTodo = (id) => {
      const temporaryTodos = [...todos];
      const newTodos = temporaryTodos.filter((todo) => todo.id !== id);
      setTodos(newTodos)
  }
  
  return (
    <>
    <TodoList todos = {list} completeTodo={completeTodo} deleteTodo={deleteTodo} />
    </>
)}
  
// }

export default App;


// to run app type into terminal "npm start"
// wait a minute for page to open up