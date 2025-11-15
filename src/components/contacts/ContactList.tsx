'use strict'

import React from 'react'
import { NavLink } from 'react-router'
import { Contact } from '../../types/contact.types'

export default function ContactList({ contacts }: { contacts: Array<Contact> }) {
  return (
    <ul className="p-0 m-0 list-none">
      {contacts.map((contact: Contact) => (
        <li key={contact.id} className="my-1">
          <NavLink
            to={`contacts/${contact.id}`}
            className={({ isActive, isPending }) =>
              `flex items-center justify-between overflow-hidden whitespace-pre p-2 rounded-lg text-inherit no-underline gap-4 ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : isPending
                  ? 'text-blue-600'
                  : 'hover:bg-gray-300 hover:text-blue-600'
              }`
            }>
            {contact.firstname || contact.lastname ? (
              <>
                {contact.firstname} {contact.lastname}
              </>
            ) : (
              <i className="text-gray-500">No name</i>
            )}{' '}
            {contact.favorite && <span>★</span>}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
