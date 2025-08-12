import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './Components/Counter'
import Home from './Components/Home'
import Effects from './Components/Effects'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/usestate" element={<Counter/>} />
      <Route path="/useeffect" element={<Effects/>} />
    </Routes>
    </BrowserRouter>
   
  
  )
}

export default App
