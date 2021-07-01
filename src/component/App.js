import '../style/App.css';
import TodoItem from './TodoItem';
import tasks from '../todoData.json'
import React from 'react';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: tasks
    }
  }
  render(){
    const todoItems = this.state.todos.map(item =>  {
      return <TodoItem key={item.id} task = {item}/>
    });
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    );
  }
}

export default App;
