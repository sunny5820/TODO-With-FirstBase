import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskAdd from './components/TaskAdd';
import TaskDisplay from './components/TaskDisplay';

class App extends Component {
  constructor(props){
  super(props);
  this.state={
    tasks:[ 
      {todo:'할일 1'},
      {todo:'할일 2'},
      {todo:'할일 3'},
      {todo:'할일 4'},
    ],
    task:''
    }
  }
  onClickHandler = (e) =>{
    //console.log(e.target);
    e.preventDefault();
    const task = {todo:this.state.task};
    const tasks = [...this.state.tasks, task];
    this.setState({
      tasks:tasks,
      task:''
    })
  }

  onChangeHandler = (e) =>{
    this.setState({
      task:e.target.value
    });
  }

  deleteHandler = (idx) =>{
    const tasks = this.state.tasks.filter((task,i) =>i!==idx)
    this.setState({tasks});
  }

  render(){
    return (
      <div className="App">
        <TaskAdd
          value={this.state.task}
          changeHandler={this.onChangeHandler}
          clickHandler={this.onClickHandler}
        />
        <div>
          {/* 할일 출력 부분 */}
          <TaskDisplay
            tasks={this.state.tasks}
            deleteHandler={this.deleteHandler}
          />
        </div>
      </div>
    );
  } 
}



export default App;
