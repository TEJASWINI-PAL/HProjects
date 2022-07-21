import React, { useState } from 'react'
import './style.css'

const UseState = () => {
  const[myNum,setMyNum] = useState(0)
  return (
    <>
    <div className='center-div'>
  <p></p>
    <div className='button_2' onClick={()=> setMyNum (myNum + 1)}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    INCR
  </div>
  <div className='button_2' onClick = {() => (myNum > 0 ? setMyNum(myNum -1) :setMyNum(0))}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    DECR
  </div>
</div>

      
    </>
  )
}

export default UseState
