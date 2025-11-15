'use strict'

import React from 'react'
import { Outlet } from 'react-router'

export default function Main() {
  return (
    <main className="col-start-2 col-end-3 p-4">
      <Outlet />
    </main>
  )
}
