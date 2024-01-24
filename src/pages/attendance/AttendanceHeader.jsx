import React from 'react'

function AttendanceHeader() {
  return (
    <React.Fragment>
        <div className=' bg-gray-100 w-full px-3 flex md:flex-col md:items-center py-1 md:py-2'>
            <input type="search" placeholder='Search Student' name="" className=" px-2 py-1 rounded-md bg-white w-full md:w-3/4" />
        </div>
        <main className='md:py-5 bg-gray-100 flex pb-3 pt-1 items-center  justify-around'>
            <select className=' bg-white my-2 py-1 md:px-5 md:py-3 px-1.5 rounded-md font-semibold outline-none' name="" id="">
                <option value="sta">Statistics</option>
                <option value="math101">Mathematics</option>
                <option value="gst111">GST111</option>
                <option value="gst121">GST121</option>
                <option value="cyb">Cyber Hygiene</option>
                <option value="phy101">Physics</option>
                <option value="csc101">Computer Science</option>
            </select>
            <button className=' bg-purple-500 px-2 md:px-5 md:py-3 py-1 font-medium text-white  rounded-md'>Take Attendance</button>
        </main>
    </React.Fragment>
  )
}

export default AttendanceHeader