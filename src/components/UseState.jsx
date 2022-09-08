import React from 'react'
import { useState } from 'react'

const UseState = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
        <h1>useState hook</h1>
        <h4>useState hook lets us add react state to our functional component.</h4>
        <h5>implementation----</h5>
        <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>increase</button>
    <button onClick={()=>{setCount(count-1)}}>decrease</button>
    <button onClick={()=>{setCount(0)}}>reset</button>
    </div>
  )
}

export default UseState