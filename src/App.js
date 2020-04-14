import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskAdd from './components/TaskAdd';
import TaskDisplay from './components/TaskDisplay';

import { firestore } from "./firebase";

class App extends Component {
  constructor(props){
  super(props);
  this.state={
    tasks:[ 
      
    ],
    task:''
    }
  }

  componentDidMount(){
    const tasks = [...this.state.tasks]
    firestore.collection('tasks').get()
    .then(docs=>{
      //console.log('성공');
       docs.forEach(doc=>{
         //console.log(doc.data().todo+" "+ doc.id);
         tasks.push({todo:doc.data.todo, id:doc.id})
      })
      this.setState({tasks:tasks})
    })
    
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
      <div className="container">
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
