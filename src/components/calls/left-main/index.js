import React from 'react'
import { CallsMenu, DialerList } from '../../../data/calls'
import DialerItem from './dialer-item'
import './left-main.css'
import MenuItem from './menu-item'

function LeftMain() {
  const menu = CallsMenu
  const dialerList = DialerList
  return (
    <div className='leftMain'>
      <div className='leftMain-menu'>
        <label className='menu-label'>Calls</label>
        <div className='menu-items'>
          {menu.map((item) => {
            return <MenuItem item={item} />
          })}
        </div>
      </div>
      <div className='leftMain-dialer'>
        <label className='dialer-label'>Make a call</label>
        <div className='dialer-search'>
          <input type='text' placeholder='Type a name' />
        </div>
        <div className='dialer-suggested'>
          <label className='suggested-label'>Suggested</label>
          <div className='suggested-list'>
            {dialerList.map((item) => {
              return <DialerItem item={item} />
            })}
          </div>
        </div>
        <div className='dialer-botton'>
          <div className='dialer-bottom-icon'>
            <i className='fi-rr-microphone ic'></i>
          </div>
          <div className='dialer-bottom-icon'>
            <i className='fi-rr-video-camera ic'></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftMain
