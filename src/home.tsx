'use strict'

import React, { Key } from 'react'
import { NavLink, useLoaderData } from 'react-router'

export default function Home() {
  const { contacts, q } = useLoaderData()

  return (
    <div className="grid grid-rows-[min-content_1fr] p-4">
      <h2 className="text-gray-500 text-[1.5rem] flex items-center gap-2">
        Contacts <span className="text-[1rem]">({contacts.length})</span>
      </h2>
      {contacts.length ? (
        <ul className="p-0 m-0 list-none">
          {contacts.map((contact: { id: Key; first: any; last: any; favorite: any }) => (
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
                {contact.first || contact.last ? (
                  <>
                    {contact.first} {contact.last}
                  </>
                ) : (
                  <i className="text-gray-500">No name</i>
                )}{' '}
                {contact.favorite && <span>★</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        <div className="h-full flex flex-col items-center justify-content gap-5">
          <img src="/images/emptycontacts_animation_cell4.png" alt="empty contacts" width={220} height={220} />
          <p>No contacts yet</p>
          <nav className="flex items-center gap-2">
            <NavLink to="" className="text-[blue] font-medium px-4 py-2 hover:bg-[#eee] hover:rounded-full">
              Create contact
            </NavLink>
            <NavLink to="" className="text-[blue] font-medium px-4 py-2 hover:bg-[#eee] hover:rounded-full">
              Import contacts
            </NavLink>
          </nav>
        </div>
      )}
    </div>
  )
}
