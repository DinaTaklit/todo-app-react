import '../style/App.css';
import TodoItem from './TodoItem';
import tasks from '../todoData.json'


function App() {
  const todoItems = tasks.map(item =>  {
    return <TodoItem key={item.id} task = {item}/>
  });
  return (
    <div className="todo-list">
      {todoItems}
    </div>
  );
}

export default App;
