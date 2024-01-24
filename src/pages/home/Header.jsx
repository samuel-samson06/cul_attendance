import React from 'react'
import profile from "../../images/profile.svg"
import { today } from '../../extras/date'

function Header() {
    
  return (
    <React.Fragment>
        <div className='sm:flex-row sm:justify-between bg-gray-100 flex flex-col gap-5 pt-2 pb-5'>
            <aside className=' px-5 flex items-center gap-2'>
                <img src={profile} alt="Profile" className=' md:w-16 w-14' />
                <div>
                    <p className=' font-semibold'>Hello Rex! 👋</p>
                    <p className=' font-semibold text-sm'> {today}</p>
                </div>
            </aside>  
            <main className=' flex sm:gap-4 md:gap-14 sm:mx-3  justify-evenly'>
                <select className=' bg-white my-2 py-1 px-1.5 rounded-md font-semibold outline-none' name="" id="">
                    <option value="sta">Statistics</option>
                    <option value="math101">Mathematics</option>
                    <option value="gst111">GST111</option>
                    <option value="gst121">GST121</option>
                    <option value="cyb">Cyber Hygiene</option>
                    <option value="phy101">Physics</option>
                    <option value="csc101">Computer Science</option>
                </select>
                <input  className=' bg-white my-2 py-1 px-1.5 rounded-md font-semibold outline-none' type="date" name="" id="" />
            </main>
        </div>
    </React.Fragment>
  )
}

export default Header