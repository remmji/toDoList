import React from 'react'
import {ACTIONS} from './App.js'
const Task = ({todo,dispatch}) => {
  return (
    <div className='container-task'>
        <span style={{color: todo.complete?'#03AC13':'#333'}}>{todo.name}
        </span>
        <button className='btn-toggle' onClick={()=>dispatch({type:ACTIONS.TOGGLE,payload :{id: todo.id}})}>Done</button>
        <button className='btn-del' onClick={()=>dispatch({type:ACTIONS.DELETE,payload :{id: todo.id}})}>Remove</button>
    </div>
  )
}

export default Task