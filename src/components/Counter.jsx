import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
    const increement=()=>setCount((prev)=>prev+1 )
    const decreement=()=>setCount((prev)=>prev >0?prev-1:prev=0)
    const reset=()=>setCount(0)
  return (
    <div>
        <button onClick={increement}>+</button>
        <span>{count}</span>
        <button onClick={decreement}>-</button>
        <button onClick={reset}> reset</button>
    </div>
  )
}

export default Counter