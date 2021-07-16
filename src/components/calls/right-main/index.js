import React from 'react'
import { ContactCards } from '../../../data/calls'
import ContactCard from './contact-card'
import './right-main.css'

function RightMain() {
  const contacts = ContactCards
  return (
    <div className='rightMain'>
      <div className='rightMain-heading'>
        <label className='heading-label'>Contacts</label>
      </div>
      <div className='rightMain-options'>
        <div className='contact-search'>
          <input placeholder='Find a contact' />
          <div className='contact-search-icon'>
            <i class='fi-rr-search'></i>
          </div>
        </div>
        <div className='add-button'>
          <div className='add-icon'>
            <i class='fi-rr-user-add'></i>
          </div>
          <label className='add-label'>Add Contact</label>
        </div>
      </div>
      <div className='contact-list'>
        {contacts.map((item) => {
          return <ContactCard item={item} />
        })}
      </div>
    </div>
  )
}

export default RightMain
