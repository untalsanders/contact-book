'use strict'

import { NavLink } from 'react-router'

export default function Header() {
  return (
    <header className="col-start-1 col-end-3 border border-[#ccc] flex items-center p-4">
      <h1 className="text-[1.5rem] font-medium leading-none flex items-center select-none">
        <img src="/images/logo.svg" alt="logo" className="w-8 h-8 mr-2" />
        <NavLink to="/">Contacts</NavLink>
      </h1>
    </header>
  )
}
