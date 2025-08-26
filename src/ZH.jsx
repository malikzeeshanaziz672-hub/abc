import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./ZH.css"
const ZH = () => {
    const navigate = useNavigate();
    const handleClick = () =>{
    navigate("/zhbuttona")
    }
  return (
    <div className='ZH animate'>
       

      <h1 style={{color:"blueviolet"}}>Grand Meeting </h1>
      <p>for more about this <span style={{color: "blueviolet"}}>meeting</span> click the below button</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default ZH