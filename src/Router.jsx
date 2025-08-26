import React from 'react'
import {lazy} from "react"
  
import {BrowserRouter , Route, Routes } from 'react-router-dom'


    const ZH = lazy(()=>import("./ZH"))
 const ZHbuttonA = lazy(()=>import("./ZHbuttonA"))
  const ZHbuttonB = lazy(()=>import("./ZHbuttonB"))

const Router = () => {

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<ZH/>}/>
        <Route path='/zhbuttona' element={<ZHbuttonA/>}/>
        <Route path='/zhbuttonb' element={<ZHbuttonB/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router