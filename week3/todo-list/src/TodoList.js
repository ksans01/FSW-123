import {list} from './STORE.js'
// import completeTodo from './App.js'
// import deleteTodo from './App.js'

const TodoList = (todos, completeTodo, deleteTodo) => {

    
    return (    

        <div>
        <h1>Todo List</h1>
        {list.map((todos) => (
            
            <div className="check-list" key={todos.id}>
                <input type = "checkbox" />{todos.text}
                <button >x</button>
            </div>
            
        ))}
      </div>
      
    )
}

export default TodoList