import React from 'react'
import { useReducer } from 'react'

const initialState=0;

const reducer=(state,action)=>{
  switch(action.type){
    case 'increment':
      return state+1
    case 'decrement':
      return state-1
    case 'increment5':
      return state+5
    case 'decrement5':
      return state-5
    default:
      return state
  }
}

const UseReducer = () => {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <h1>UseReducer hook</h1>
      <h3>useReducer hook works same as the useState hook.only difference is that we can track multiple states here very easily than the useState hook.</h3>
      <h2>implementation------</h2>
      <h2>{state}</h2>
      <button onClick={()=>{dispatch({type:'increment'})}}>+1</button>
      <button onClick={()=>{dispatch({type:'decrement'})}}>-1</button>
      <button onClick={()=>{dispatch({type:'increment5'})}}>+5</button>
      <button onClick={()=>{dispatch({type:'decrement5'})}}>-5</button>
    </div>
  )
}

export default UseReducer