import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
      <div className='header-menu'>
        <i class='fi-rr-layout-fluid'></i>
      </div>
      <div className='header-leftMain'>
        <label className='header-label'>Microsoft Teams</label>
      </div>
      <div className='header-rightMain'>
        <div className='header-search'>
          <i class='fi-rr-search'></i>
          <input type='text' placeholder='Search' />
        </div>
        <div className='header-profile'>
          <div className='header-options'>
            <i class='fi-rr-menu-dots'></i>
          </div>
          <img
            className='header-avatar'
            src='https://image.flaticon.com/icons/png/128/145/145843.png'
            alt='avatar'
          />
        </div>
      </div>
    </div>
  )
}

export default Header
