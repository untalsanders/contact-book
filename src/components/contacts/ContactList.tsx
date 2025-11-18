'use strict'

import { Contact } from '../../types/contact.types'
import ContactRow from './ContactRow'

export default function ContactList({ contacts }: { contacts: Contact[] }) {
  return (
    <section className="grid grid-rows-[min-content_1fr] gap-y-4 px-4">
      <h2 className="text-gray-500 text-[1.5rem] flex items-center gap-2">
        Contacts <span className="text-[1rem]">({contacts.length})</span>
      </h2>
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
          <tr>
            <th className="p-2 whitespace-nowrap border border-gray-300">
              <div className="font-semibold text-left">NAME</div>
            </th>
            <th className="p-2 whitespace-nowrap border border-gray-300">
              <div className="font-semibold text-left">PHONE NUMBER</div>
            </th>
            <th className="p-2 whitespace-nowrap border border-gray-300">
              <div className="font-semibold text-left"></div>
            </th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-100">
          {contacts.map(contact => (
            <ContactRow contact={contact} key={contact.id} />
          ))}
        </tbody>
      </table>
    </section>
  )
}
