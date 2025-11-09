'use strict'

import React, { StrictMode } from 'react'
import { Container, createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import { router } from './routes'

const el = document.getElementById('root') as Container
const root = createRoot(el)

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
