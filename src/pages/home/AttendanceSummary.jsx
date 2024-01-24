import React from 'react'
import {PiStudent} from "react-icons/pi"
import {FaRegSmile} from "react-icons/fa"
import {HiOutlineEmojiSad} from "react-icons/hi"

function AttendanceSummary() {
  return (
    <React.Fragment>
        <div className='  flex flex-col md:mx-16 md:gap-5 gap-2 py-5'>
            <div className=' flex items-center md:px-10 gap-5 bg-green-400 text-white rounded-md mx-4 py-4 my-2 px-2'>
                <FaRegSmile className=' font-semibold text-3xl'/>
                <div className=' uppercase text-lg font-semibold'>
                    <p>42</p>
                    <p className=' font-semibold md:text-xl'>Present students</p>
                </div>
            </div>
            <div className=' flex items-center md:px-10 gap-5 bg-red-400 text-white rounded-md mx-4 py-4 my-2 px-2'>
                <HiOutlineEmojiSad className=' text-3xl'/>
                <div className='uppercase text-lg font-semibold'>
                    <p>5</p>
                    <p className=' font-semibold md:text-xl'>Absent students</p>
                </div>
            </div>
            <div className=' flex items-center md:px-10 gap-5 bg-neutral-200 rounded-md mx-4 py-4 my-2 px-2'>
                <PiStudent className=' text-3xl'/>
                <div className=' uppercase text-lg font-semibold'>
                    <p>47</p>
                    <p className=' font-semibold md:text-xl'>Total students</p>
                </div>
            </div>
            
        </div>
    </React.Fragment>
  )
}

export default AttendanceSummary