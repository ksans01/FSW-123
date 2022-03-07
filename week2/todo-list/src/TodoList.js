

const TodoList = (props) => {
    const data = props.list
    
    return (
    

        <div>
            <h1>List of Todos</h1>
            {data.map((item) => (
                
                <div className="check-list" key={item.id}>
                    <input type = "checkbox" />{item.text}
                </div>
                
            ))}
        </div>
    
    )
}

export default TodoList