import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {RiDashboardFill} from "react-icons/ri"
import {TiGroup} from "react-icons/ti"
import {IoPersonCircleOutline} from "react-icons/io5"
import { motion } from 'framer-motion'
import { Context } from '../../context/Context'

function Navbar() {
    const {navTrigger,setNavTrigger}=useContext(Context)
    function handleTriggerOutlet(){
        setNavTrigger(false)
    }
  return (
    <React.Fragment>
        <motion.nav className='  fixed top-0 w-2/3 md:w-2/4 ' variants={{
            initial:{
                x:-1000,
            },
            animate:{
                x:0,
                transition:{
                    type:'tween'
                }
            },exit:{
                x:-1000
            }
        }} initial="initial" animate={navTrigger?"animate":'exit'}>
            <ul className=' rounded-e-lg text-xl bg-gray-100  flex flex-col px-2 py-3 gap-7  h-screen '>
                <NavLink to={"/"} onClick={handleTriggerOutlet} className='border-b-2 pb-2 flex items-center gap-3 '>
                    <RiDashboardFill/>
                    <li >Overview</li>
                </NavLink>
                <NavLink to={"/attendance"} onClick={handleTriggerOutlet} className=' border-b-2 pb-2 flex items-center gap-3'>
                    <TiGroup/>
                    <li >Attendance</li>
                </NavLink>
                <NavLink to={"/login"} onClick={handleTriggerOutlet} className=' border-b-2 pb-2 flex items-center gap-3'>
                    <IoPersonCircleOutline/>
                    <li >Login</li>
                </NavLink>
            </ul> 
        </motion.nav>
        
    </React.Fragment>
  )
}

export default Navbar