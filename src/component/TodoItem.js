function TodoItem({task, handleChange}){
    return(
        <div className="todo-item">
            <input type="checkbox" 
                onChange={() => handleChange(task.id)}
                checked={task.completed}
            />
            <p className={task.completed? 'completed': ''}>{task.text}</p>
        </div>
    )
}

export default TodoItem;
