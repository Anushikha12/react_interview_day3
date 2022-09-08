import React, { useMemo } from 'react'
import { useState } from 'react'

const UseMemo = () => {
    const [count1,setCount1]=useState(0)
    const [count2,setCount2]=useState(0)

    const isEven=useMemo(()=>{
        let i=0;
        while(i<200000000)
        i++
        return count1%2===0
    },[count1])
  return (
    <div>
        <h1>useMemo hook</h1>
        <h2>this hook is used for performance optimization of our react application.</h2>
        <div>
            <button onClick={()=>{setCount1(count1+1)}}>count-{count1}</button>
            <span>{isEven?'even':'odd'}</span>
        </div>
        <div>
        <button onClick={()=>{setCount2(count2+1)}}>count-{count2}</button>
        </div>
    </div>
  )
}

export default UseMemo