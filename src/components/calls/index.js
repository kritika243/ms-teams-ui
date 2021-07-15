import React from 'react'
import Header from '../common/header'
import Sidebar from '../common/sidebar'
import LeftMain from './left-main'
import RightMain from './right-main'
import './calls.css'

function Calls() {
  return (
    <div className='calls-container'>
      <Header />
      <div className='calls-body'>
        <div className='calls-sidebar'>
          <Sidebar />
        </div>
        <div className='calls-leftMain'>
          <LeftMain />
        </div>
        <div className='calls-rightMain'>
          <RightMain />
        </div>
      </div>
    </div>
  )
}

export default Calls
