import { useState } from 'react'

import './App.css'
import First from './components/First'
import Reg from './components/Reg'
import Tab from './components/Tab'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import StateBasic from './components/StateBasic'
import Three from './components/Three'
import FormBasics from './components/FormBasics'
import ApiGet from './components/ApiGet'
import GridCard from './components/Gridcard'

// import { Button } from '@mui/material'
// import Counter from './components/Counter'

function App() {
  return (
    <>

      <Nav/>
      <Routes>
        <Route path='/' element={<First name />}/>
        <Route path='/r' element={<Reg data/>}/>
        <Route path='/t' element={<Tab/>}/>
        <Route path='/s' element={<StateBasic/>}/>
        <Route path ='/b' element ={<Three/>}/>
        <Route path ='/f' element ={<FormBasics/>}/>
        <Route path ='/p' element ={<ApiGet/>}/>
        <Route path ='/n' element ={<GridCard/>}/>

        {/* <Route path='/c' element={<Counter/>}> */}
        </Routes>
        
        <Routes/>
     
    </>
  )
}

export default App
