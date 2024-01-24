import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Attendance from "./pages/attendance/Attendance"
import Students from './pages/students/Students'

function Cul_Attendance() {

  return (
    <React.Fragment>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route element={<Home/>} path='/'/>
                    <Route element={<Attendance/>} path='/attendance'/>
                    <Route element={<Students/>} path='/:id'/>
                    <Route element={<Login/>} path='/login'/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.Fragment>
  )
}

export default Cul_Attendance