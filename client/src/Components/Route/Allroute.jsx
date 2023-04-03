import React from 'react'
import {Routes,Route} from "react-router-dom";
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Registration from '../Pages/Registration';
const Allroute = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<Registration/>}/>
    </Routes>
  )
}

export default Allroute