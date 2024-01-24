import React from 'react'
import { attendanceList } from './fakeAttendanceList'

function MainAttendance() {
  return (
    <React.Fragment>
        <div className=' bg-gray-100 flex flex-col gap-3 pt-2 pb-4 h-screen sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 sm:px-5  sm:gap-5  '>
            {
                attendanceList.map(function(eachPerson){
                    return (
                        <div key={eachPerson.id} className=' mx-3  flex justify-between items-center bg-white md:py-4 md:px-4 px-2 py-2  rounded-md'>
                            <div className=' gap-2 font-semibold flex items-center'>
                                <img src={eachPerson.img} className=' lg:w-16 w-12' alt="Image" />
                                <div>
                                    <p className=' text-lg'>{eachPerson.name}</p>
                                    <p className=' font-light text-sm'>{eachPerson.matricNo}</p>
                                </div>
                            </div>
                            <div>
                                <button className={`${eachPerson.attendance&&"bg-green-400 text-white"}  font-semibold text-lg rounded-full  py-1 px-3`}>P</button>
                                <button className={`${!eachPerson.attendance&&"bg-red-400 text-white"} font-semibold text-lg rounded-full  py-1 px-3`}>A</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </React.Fragment>
  )
}

export default MainAttendance