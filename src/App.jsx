import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './Components/Counter'
import Home from './Components/Home'
import Effects from './Components/Effects'
import UseContext from './Components/UseContext'
import UseRef from './Components/UseRef'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/usestate" element={<Counter/>} />
      <Route path="/useeffect" element={<Effects/>} />
      <Route path="/usecontext" element={<UseContext/>} />
      <Route path="/useref" element={<UseRef/>}/>
    </Routes>
    </BrowserRouter>
   
  
  )
}

export default App;
