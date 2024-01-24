import React from 'react'
import Header from './Header'
import AttendanceSummary from './AttendanceSummary'

function Home() {
  return (
    <React.Fragment>
        <div>
          <Header/>
        </div>
        <div>
          <AttendanceSummary/>
        </div>
    </React.Fragment>
  )
}

export default Home