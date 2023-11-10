function TodoList ({todos}) {
    
    return(
        <>
            {todos.map(todo => {
                return <div>
                            <ul className="flex justify-between">
                                <li key={todo.id}>{todo.title}</li>
                                <input type="radio" checked={todo.completed}/>
                            </ul>
                        </div>
            })}
        </>
    )
}

export default TodoList;