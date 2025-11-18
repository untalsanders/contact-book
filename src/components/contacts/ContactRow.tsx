import React from 'react'
import { Form, NavLink } from 'react-router'
import { Contact } from '../../types/contact.types'
import ContactPhoto from './ContactPhoto'

export default function ContactRow({ contact }: { contact: Contact }) {
  return (
    <tr key={contact.id} className="hover:bg-gray-100">
      <td className="p-2 whitespace-nowrap border border-gray-300">
        <div className="flex items-center">
          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
            <ContactPhoto contact={contact} />
          </div>
          <div className="font-medium text-gray-800">
            {contact.firstname} {contact.lastname}
          </div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap border border-gray-300">
        <div className="text-left">{contact.phone}</div>
      </td>
      <td className="p-2 whitespace-nowrap border border-gray-300">
        <div className="flex items-center gap-2">
          <NavLink
            to={`/contacts/${contact.id}`}
            className="cursor-pointer border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 px-4 py-2">
            Ver
          </NavLink>
          <NavLink
            to={`/contacts/${contact.id}/edit`}
            className="cursor-pointer border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 px-4 py-2">
            Editar
          </NavLink>
          <Form
            action={`/contacts/${contact.id}/destroy`}
            method="post"
            onSubmit={event => {
              if (!confirm('Por favor confirme que desea eliminar este contacto.')) {
                event.preventDefault()
              }
            }}>
            <button
              type="submit"
              className="cursor-pointer border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 px-4 py-2">
              Eliminar
            </button>
          </Form>
        </div>
      </td>
    </tr>
  )
}
