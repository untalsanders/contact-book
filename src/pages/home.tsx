'use strict'

import ContactList from '@/components/contacts/ContactList'
import ContactListEmpty from '@/components/contacts/ContactListEmpty'
import { useLoaderData } from 'react-router'

export default function HomePage() {
  const { contacts } = useLoaderData()

  return <div className="py-4">{contacts.length ? <ContactList contacts={contacts} /> : <ContactListEmpty />}</div>
}
