import React from 'react'
import { Form, useLoaderData } from 'react-router'
import { Contact } from '../../types/contact.types'
import Favorite from '../ui/Favorite'

export default function ContactCard() {
  const { contact } = useLoaderData() as { contact: Contact }

  return (
    <>
      <div className="flex flex-row gap-8 max-w-min">
        <img
          src={contact.avatar ?? '/images/default-avatar.jpeg'}
          alt="avatar"
          className="w-48 h-48 bg-gray-200 rounded-3xl object-cover"
        />
        <div>
          <h1 className="text-4xl font-bold leading-tight flex items-start gap-4">
            {contact.firstname || contact.lastname ? (
              <>
                {contact.firstname} {contact.lastname}
              </>
            ) : (
              <i className="text-gray-500">No name</i>
            )}{' '}
            <Favorite contact={contact} />
          </h1>

          {contact.twitter && (
            <p>
              <a
                href={`https://x.com/${contact.twitter}`}
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-blue-500 hover:underline">
                {contact.twitter}
              </a>
            </p>
          )}

          {contact.notes && <p className="whitespace-break-spaces">{contact.notes}</p>}

          <div className="flex gap-2 mt-4">
            <Form action="edit">
              <button
                type="submit"
                className="text-blue-500 font-medium border-none rounded-lg p-3 py-2 shadow-sm hover:shadow-md bg-white leading-relaxed active:shadow-sm transform active:translate-y-0.5">
                Edit
              </button>
            </Form>
            <Form
              action="destroy"
              method="post"
              onSubmit={event => {
                if (!confirm('Please confirm you want to delete this record')) {
                  event.preventDefault()
                }
              }}>
              <button
                type="submit"
                className="text-red-500 font-medium border-none rounded-lg p-3 py-2 shadow-sm hover:shadow-md bg-white leading-relaxed active:shadow-sm transform active:translate-y-0.5">
                Delete
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}
