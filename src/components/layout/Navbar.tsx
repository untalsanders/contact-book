'use strict'

import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <aside className="col-start-1 col-end-2 p-4">
      <nav className="flex flex-col select-none">
        <NavLink to={'/contacts/new'} className="text-2xl border text-center rounded-lg bg-[#ccc] p-2 my-4">
          Create Contact
        </NavLink>
        <NavLink to="/" className="hover:bg-[#eee] rounded-full px-4 py-3">
          Contacts
        </NavLink>
        <NavLink to="/about" className="hover:bg-[#eee] rounded-full px-4 py-3">
          About
        </NavLink>
        <NavLink to="/trash" className="hover:bg-[#eee] rounded-full px-4 py-3">
          Trash
        </NavLink>
      </nav>
    </aside>
  )
}
