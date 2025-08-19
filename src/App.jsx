import { useState } from 'react'
import './App.css'
import ElegantNavbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router'
import Facilities from './components/Facilities'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div><ElegantNavbar/></div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/facilities' element={<Facilities/>}></Route>
        </Routes>
      </BrowserRouter>
      <div><Footer/></div>
    </>
  )
}

export default App
