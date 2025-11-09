'use strict'

import React from 'react'
import { Form, redirect, useLoaderData, useNavigate, ActionFunctionArgs } from 'react-router'
import { updateContact } from '../data/contacts'

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)
  await updateContact(params.id, updates)
  return redirect(`/contacts/${params.id}`)
}

export default function EditContact() {
  const { contact } = useLoaderData()
  const navigate = useNavigate()

  const cancelHandleClick = () => {
    navigate(-1)
  }

  return (
    <Form method="post" className="flex flex-col gap-4">
      <p className="flex">
        <span className="w-32">Name</span>
        <input
          type="text"
          placeholder="First"
          aria-label="First name"
          name="first"
          defaultValue={contact.first}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 shadow-sm hover:shadow-md bg-white leading-relaxed"
        />
        <input
          type="text"
          placeholder="Last"
          aria-label="Last name"
          name="last"
          defaultValue={contact.last}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 shadow-sm hover:shadow-md bg-white leading-relaxed"
        />
      </p>
      <label htmlFor="twitter" className="flex">
        <span className="w-32">Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact.twitter}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 shadow-sm hover:shadow-md bg-white leading-relaxed"
        />
      </label>
      <label htmlFor="avatar" className="flex">
        <span className="w-32">Avatar URL</span>
        <input
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
          aria-label="Avatar URL"
          placeholder="https://example.com/avatar.jpg"
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 shadow-sm hover:shadow-md bg-white leading-relaxed"
        />
      </label>
      <label htmlFor="notes" className="flex">
        <span className="w-32">Notes</span>
        <textarea
          name="notes"
          defaultValue={contact.notes}
          rows={6}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 shadow-sm hover:shadow-md bg-white leading-relaxed"></textarea>
      </label>
      <p className="flex gap-2 ml-32">
        <button
          type="submit"
          className="text-blue-500 font-medium border-none rounded-lg p-3 py-2 shadow-sm hover:shadow-md bg-white leading-relaxed active:shadow-sm transform active:translate-y-0.5">
          Save
        </button>
        <button
          type="button"
          onClick={cancelHandleClick}
          className="text-inherit font-medium border-none rounded-lg p-3 py-2 shadow-sm hover:shadow-md bg-white leading-relaxed active:shadow-sm transform active:translate-y-0.5">
          Cancel
        </button>
      </p>
    </Form>
  )
}
