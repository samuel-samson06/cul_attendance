import React, { useContext } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import {motion} from "framer-motion"
import { Context } from '../../context/Context'

function Layout() {
    const {navTrigger,setNavTrigger}=useContext(Context)
    function handleTrigger(){
        setNavTrigger(!navTrigger)
    }
    function handleTriggerOutlet(){
        setNavTrigger(false)
    }
  return (
    <React.Fragment>
        <div>
            <div onClick={handleTrigger} className=' bg-gray-100  flex gap-1 pt-3 pb-6 px-1 flex-col'>
                <motion.div variants={{
                    initial:{
                        rotate:0,
                        y:0
                    },
                    animate:{
                        rotate:45,
                        y:5
                    },
                    exit:{
                        rotate:0,
                        y:0
                    }
                }} initial="initial" animate={navTrigger?"animate":'exit'} className=' rounded-md text-transparent w-7 h-0.5 bg-black'>.</motion.div>
                <motion.div variants={{
                    initial:{
                        rotate:0,
                        y:0
                    },
                    animate:{
                        rotate:-45,
                        y:-3
                    },
                    exit:{
                        rotate:0,
                        y:0
                    }
                }} initial="initial" animate={navTrigger?"animate":'exit'} className=' rounded-md text-transparent w-7 h-0.5 bg-black'>.</motion.div>
                <motion.div variants={{
                    initial:{
                        opacity:1
                    },
                    animate:{
                        opacity:0
                    },
                    exit:{
                        opacity:1
                    }
                }} initial="initial" animate={navTrigger?"animate":'exit'} className=' rounded-md text-transparent w-7 h-0.5 bg-black'>.</motion.div>
            </div>
            <aside>
                <Navbar/>
            </aside>
            <main onClick={handleTriggerOutlet}>
                <Outlet/>
            </main>
        </div>
    </React.Fragment>
  )
}

export default Layout