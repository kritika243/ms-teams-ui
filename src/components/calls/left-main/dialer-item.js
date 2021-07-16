import React from 'react'
import './dialer-item.css'

function DialerItem({ item }) {
  return (
    <div className='dialer-item'>
      <img src={item.avatar} alt='avatar-image' className='item-avatar' />
      <div className='item-info'>
        <label className='item-title'>{item.name}</label>
        <label className='item-subtitile'>{item.type}</label>
      </div>
      <div className='item-icons'>
        <div className='item-icon'>
          <i class='fi-rr-microphone'></i>
        </div>
        <div className='item-icon'>
          <i class='fi-rr-video-camera'></i>
        </div>
      </div>
    </div>
  )
}

export default DialerItem
