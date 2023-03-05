import React from "react";
import { useReducer } from "react";
import { useState } from "react";
import Task from "./Task";

export const ACTIONS ={
  ADD: 'add',
  TOGGLE: 'toggle-todo',
  DELETE: 'delete'
}

function reducer (todo,action){
  switch(action.type){
    case ACTIONS.ADD:
      if(action.payload.name===''){
        return todo
      }
      return[...todo,newTask(action.payload.name)]
    case ACTIONS.TOGGLE:
      return todo.map((element)=>{
        if(element.id===action.payload.id){
          return {...element,complete:!element.complete}
        }
        return element
      })
    case ACTIONS.DELETE:
      return todo.filter(element=>element.id!==action.payload.id)
      default:
        return todo;
  }
}

function newTask(name){
  return {id:Date.now(),name:name,complete:false}
}


function App() {
const [todo,dispatch] = useReducer(reducer,[])
const [name,setName] = useState('')

function handleSubmit(e){
  e.preventDefault();
  dispatch({type:ACTIONS.ADD,payload:{name:name}})
  setName('')
 
}


  return (
    <>
    <div className="container">
      <div className="form-element">
        <form>
          <label htmlFor="todo">-Daily Quests-</label>
          <br/>
          <input type="text" id='todo' value={name} onChange={e=>setName(e.target.value)}/>
        </form>
      </div>
    </div>
      <div className="container">
        <button className='btn-add' type='submit'onClick={handleSubmit}>Accept quest</button>
      </div>
           {todo.map((element)=>{
         return <Task key={element.id} todo={element} dispatch={dispatch}/>
        })}
    </>
  );
}

export default App;
