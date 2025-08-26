import  { Suspense } from 'react'
import  Router from './Router'
import "./index.css"


const App = () => {

  return (
    <Suspense fallback="wait kr na....">
    <Router/>
    </Suspense>

  )
}

export default App