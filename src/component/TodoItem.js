function TodoItem({task, handleChange}){
    return(
        <div className="todo-item">
            <input type="checkbox" 
            checked={task.completed}
            onChange={() => handleChange(task.id)}/>
            <p>{task.text}</p>
        </div>
    )
}

export default TodoItem;
