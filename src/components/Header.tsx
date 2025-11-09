'use strict'

import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <header className="border border-[#ccc] flex items-center p-4">
      <h1 className="text-[1.5rem] font-medium leading-none flex items-center">
        <img src="/logo.svg" alt="logo" className="w-8 h-8 mr-2" />
        <NavLink to="/">Contacts</NavLink>
      </h1>
    </header>
  )
}
