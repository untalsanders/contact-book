'use strict'

import React, { Key, useEffect } from 'react'
import { Form, NavLink, useLoaderData, useNavigation, useSubmit } from 'react-router'

export default function Sidebar() {
  const { contacts, q } = useLoaderData()
  const navigation = useNavigation()
  const submit = useSubmit()
  const searching = navigation.location && new URLSearchParams(navigation.location.search).has('q')

  useEffect(() => {
    // @ts-ignore
    document.querySelector('#q').value = q
  }, [q])

  return (
    <div className="w-min max-w-[30vw] bg-gray-100 border-r border-gray-300 flex flex-col">
      <div className="flex items-center gap-4 p-4 border-b border-gray-300">
        <Form id="search-form" role="search">
          <input
            id="q"
            className={`pl-8 bg-white border border-gray-300 rounded-lg px-3 py-2 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 relative ${
              searching ? 'loading' : ''
            }`}
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="%23999" stroke-width="2"%3E%3Cpath stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /%3E%3C/svg%3E\')',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0.625rem 0.75rem',
              backgroundSize: '1rem',
            }}
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
            defaultValue={q}
            onChange={e => {
              const isFirstSearch = q == null
              submit(e.currentTarget.form, { replace: !isFirstSearch })
            }}
          />
          <div
            id="search-spinner"
            aria-hidden
            hidden={!searching}
            className="w-16 h-16 animate-spin absolute right-1/2 top-1/2"
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"%3E%3Cpath stroke="%23000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 4v5h-.582m0 0a8.001 8.001 0 00-15.356 2m15.356-2H15M4 20v-5h.581m0 0a8.003 8.003 0 0015.357-2M4.581 15H9" /%3E%3C/svg%3E\')',
            }}
          />
          <div className="sr-only" aria-live="polite" />
        </Form>
        <Form method="post">
          <button
            type="submit"
            className="text-blue-500 font-medium border-none rounded-lg p-3 py-2 shadow-sm hover:shadow-md bg-white leading-relaxed active:shadow-sm transform active:translate-y-0.5">
            New
          </button>
        </Form>
      </div>
      <nav className="flex-1 overflow-auto p-4">
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
          <p>
            <i className="text-gray-500">No contacts</i>
          </p>
        )}
      </nav>
    </div>
  )
}
