import React from 'react'

export const Toogle = () => {
    const[toogle,setToogle]=useState(false)
    
  return (
    <div >
     <h1>Welcome to react </h1>
        <button onClick={()=>{
            return setToogle(
                
            )
        }}>Toogle</button>
    </div>
  )
}
