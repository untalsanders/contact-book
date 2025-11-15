'use strict'

import React from 'react'
import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <aside className="flex flex-col gap-4 p-4 select-none">
      <NavLink to="/">Contacts</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/trash">Trash</NavLink>
    </aside>
  )
}
