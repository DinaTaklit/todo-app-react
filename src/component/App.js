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

  handleChange = (id) => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(task => {
        if (task.id === id){
          return {...task, completed: !task.completed};
        }
        return task
      }) 
      return {
        todos: updatedTodos 
      }
    })
  }

  render(){
    console.log('render')
   
    const todoItems = this.state.todos.map(item =>  {
      return (
        <TodoItem 
          key={item.id} 
          task = {item} 
          handleChange={this.handleChange}
        />)
      });
      console.log(todoItems)

      return (
        <div className="todo-list">
          {todoItems}
        </div>
      );
    
  }

}

export default App;
