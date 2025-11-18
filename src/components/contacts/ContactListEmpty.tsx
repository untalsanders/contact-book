'use strict'

import { NavLink } from 'react-router'

export default function ContactListEmpty() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-5">
      <img src="/images/emptycontacts_animation_cell4.png" alt="empty contacts" width={220} height={220} />
      <p>No contacts yet</p>
      <nav className="flex items-center gap-2">
        <NavLink to="contacts/new" className="text-[blue] font-medium px-4 py-2 hover:bg-[#eee] hover:rounded-full">
          Create contact
        </NavLink>
        <NavLink to="" className="text-[blue] font-medium px-4 py-2 hover:bg-[#eee] hover:rounded-full">
          Import contacts
        </NavLink>
      </nav>
    </div>
  )
}
