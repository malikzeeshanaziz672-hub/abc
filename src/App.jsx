
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment } from './React/action';

// const App = () => {
//   const dispatch = useDispatch();
//   const data = useSelector((state)=>state.count)

//   const handleMinusBnt = () =>{
//  dispatch(decrement())
//   }

//   const handlePlusBtn = () =>{
//     dispatch(increment())
//   }


//   return (
//     <div>
//         <div>
//       <h1>Malik Zeesshan Aziz</h1>
//       <div style={{fontSize : "50px",display :'flex' ,justifyContent : "center" ,alignItems : "center" , gap:50}}>
//         <div onClick={handleMinusBnt} >-</div>
//         {data}
//         <div onClick={handlePlusBtn}>+</div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default App



import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './React/action'
// import store from './React/store'

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.count)
  const handleMinusBnt = () =>{
    dispatch(decrement())

  }
  const handlePlusBtn = () =>{
    dispatch(increment())

  }
  return (
    <div>
      <h1>Malik Zeesshan Aziz</h1>
      <div style={{fontSize : "50px",display :'flex' ,justifyContent : "center" ,alignItems : "center" , gap:50}}>
        <div onClick={handleMinusBnt} >-</div>
        {data}
        <div onClick={handlePlusBtn}>+</div>
      </div>
    </div>
  )
}

export default App