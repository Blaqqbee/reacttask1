import React from 'react'
import { useState } from 'react'

export const Button = () =>{
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
     <button className='btn' onClick={handleClick}>
      Click me!
     <div></div> 
    </button>
     <div>count:{count}</div>
    </>
   
    
  )
}
