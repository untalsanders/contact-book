'use strict'

import '@/styles/global.scss'
import React from 'react'
import { Outlet, redirect } from 'react-router'
import { createContact, getContacts } from '../data/contacts'
import Header from './components/Header'
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
  return (
    <>
      <Header />
      <main className="grid grid-cols-[min-content_1fr]">
        <Sidebar />
        <Outlet />
      </main>
    </>
  )
}
