'use strict'

import '@/styles/global.scss'
import React from 'react'
import { Outlet, redirect, useNavigation } from 'react-router'
import { createContact, getContacts } from '../data/contacts'
import Sidebar from './components/Sidebar'

export const loader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url)
  const q = url.searchParams.get('q')
  return { contacts: await getContacts(q), q }
}

export const action = async () => {
  const contact = await createContact()
  return redirect(`/contacts/${contact.id}/edit`)
}

export default function App() {
  const navigation = useNavigation()

  return (
    <>
      <Sidebar />
      <div
        className={`flex-1 p-8 ${
          navigation.state === 'loading' ? 'opacity-25 transition-opacity duration-200 delay-200' : ''
        }`}>
        <Outlet />
      </div>
    </>
  )
}
