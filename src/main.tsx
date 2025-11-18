'use strict'

import '@/styles/globals.scss'
import { StrictMode } from 'react'
import { Container, createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import { router } from './routes'

const root = createRoot(document.getElementById('root') as Container)

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
