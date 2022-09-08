import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const UseEffect = () => {
    const [count,setCount]=useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
        },2000)
    },[])
  return (
    <div>
        <h1>useEffect hook</h1>
        <h2>it works same as the componentDidMount() works in a class component.</h2>
        <h2>implementation--------</h2>
        <h2>rendered {count} times</h2>
        <h3>since,we are using empty array as dependency ,hence it will render only once when the component mounts.</h3>
    </div>
  )
}

export default UseEffect