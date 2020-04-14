import React from 'react';

const TaskDisplay = ({tasks, deleteHandler}) =>{
  console.log(tasks);
    return (
      tasks.map((task,i)=>{
        return(
      <div key={i} className="box">
        <div className="level">
          <p className="title">{task.todo}</p>
          <button className="button is-danger" onClick={()=>deleteHandler(i)}>삭제</button>
        </div>
      </div>
      )
    })
   )
}


export default TaskDisplay;