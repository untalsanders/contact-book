'use strict'

import { Form, useLoaderData } from 'react-router'
import Favorite from './favorite'
import { getContact, updateContact } from '../data/contacts'

export const loader = async ({ params }) => ({ contact: await getContact(params.id) })

export const action = async ({ request, params }) => {
  let formData = await request.formData()
  return updateContact(params.id, {
    favorite: formData.get('favorite') === 'true',
  })
}

export default function Contact() {
  const { contact } = useLoaderData()

  return (
    <>
      <div className="flex flex-row gap-8 max-w-min">
        <img
          key={contact.avatar}
          src={contact.avatar || null}
          alt="image"
          className="w-48 h-48 bg-gray-200 rounded-3xl object-cover"
        />
        <div>
          <h1 className="text-4xl font-bold leading-tight flex items-start gap-4">
            {contact.first || contact.last ? (
              <>
                {contact.first} {contact.last}
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
