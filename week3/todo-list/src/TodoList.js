import {list} from './STORE.js'

const TodoList = (todos, completeTodo, deleteTodo) => {

    // completeTodo = () => {
    //     completeTodo(todos.id)
    // };
    
    return (    

        <div>
        <h1>Todo List</h1>
        {list.map((todos) => (
            
            <div className="check-list" key={todos.id}>
                <input type = "checkbox" onChange={() => {completeTodo(todos.id)}} checked={todos.isComplete}/>
                <span style={{textDecoration: todos.isComplete ? "line-through": ""}}>{todos.text}</span>
                <button onClick={() => {deleteTodo()}}>x</button>
            </div>
            
        ))}
      </div>
      
    )
}

export default TodoList