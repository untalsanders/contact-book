'use strict'

import React from 'react'
import { useLoaderData } from 'react-router'
import ContactList from '../components/contacts/ContactList'
import ContactListEmpty from '../components/contacts/ContactListEmpty'

export default function HomePage() {
  const { contacts } = useLoaderData()

  return <div className="py-4">{contacts.length ? <ContactList contacts={contacts} /> : <ContactListEmpty />}</div>
}
