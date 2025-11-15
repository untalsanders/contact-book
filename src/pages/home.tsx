'use strict'

import React from 'react'
import { useLoaderData } from 'react-router'
import ContactList from '../components/contacts/ContactList'
import ContactListEmpty from '../components/contacts/ContactListEmpty'

export default function HomePage() {
  const { contacts } = useLoaderData()

  return (
    <div className="grid grid-rows-[min-content_1fr] p-4">
      <h2 className="text-gray-500 text-[1.5rem] flex items-center gap-2">
        Contacts <span className="text-[1rem]">({contacts.length})</span>
      </h2>
      <section className="py-4">{contacts.length ? <ContactList contacts={contacts} /> : <ContactListEmpty />}</section>
    </div>
  )
}
