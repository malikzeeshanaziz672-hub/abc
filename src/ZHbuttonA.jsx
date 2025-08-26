import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./ZHbuttonA.css"

const ZHbuttonA = () => {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate("/zhbuttonb")
  }
  return (
    <div className='ZHbuttonA animate'>
    <h1 style={{color:"blueviolet"}}>Grand Meeting</h1>
     <h1>Invited You to<span style={{color: "blueviolet"}}>(Zain  , Hamza)</span>  <br/> Grand Meetin on <span style={{color: "blueviolet"}}>M</span>onday </h1>
        <p>Compulsary for joining the Meeting</p>
        <p>
            press the below button for about the <span style={{color: "blueviolet"}}>M</span>eeting....
        </p>
   <button onClick={handleClick}>Press Me</button>
    </div>
  )
}

export default ZHbuttonA