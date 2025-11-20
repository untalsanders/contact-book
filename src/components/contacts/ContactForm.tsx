'use strict'

import { Form, useLoaderData, useNavigate } from 'react-router'

export default function ContactForm() {
  const { contact } = useLoaderData()
  const navigate = useNavigate()

  const cancelHandleClick = () => {
    navigate(-1)
  }

  return (
    <Form action={window.location.pathname} method="post" className="flex flex-col gap-4 p-4">
      <label htmlFor="firstname" className="flex gap-2">
        <span className="w-32">Firstname</span>
        <input
          type="text"
          placeholder="First"
          aria-label="First name"
          name="firstname"
          defaultValue={contact.firstname}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 shadow-sm hover:shadow-md bg-white leading-relaxed"
        />
      </label>
      <label htmlFor="lastname" className="flex gap-2">
        <span className="w-32">Lastname</span>
        <input
          type="text"
          placeholder="Last"
          aria-label="Last name"
          name="lastname"
          defaultValue={contact.lastname}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 shadow-sm hover:shadow-md bg-white leading-relaxed"
        />
      </label>
      <label htmlFor="phone" className="flex gap-2">
        <span className="w-32">Phone</span>
        <input
          type="tel"
          name="phone"
          placeholder="+54 11 1234-5678"
          defaultValue={contact.phone}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 shadow-sm hover:shadow-md bg-white leading-relaxed"
        />
      </label>
      <div className="flex gap-2 ml-32">
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
      </div>
    </Form>
  )
}
