import React from 'react'
import { createBrowserRouter } from 'react-router'
import App, { action as rootAction, loader as rootLoader } from './App'
import Contact, { action as contactAction, loader as getContactLoader } from './contact'
import { action as deleteContactAction } from './destroy'
import EditContact, { action as editContactAction } from './edit'
import ErrorPage from './error-page'
import Home from './home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Home />,
            loader: rootLoader,
            action: rootAction,
          },
          {
            path: 'contacts/:id',
            element: <Contact />,
            loader: getContactLoader,
            action: contactAction,
          },
          {
            path: 'contacts/:id/edit',
            element: <EditContact />,
            loader: getContactLoader,
            action: editContactAction,
          },
          {
            path: 'contacts/:id/destroy',
            action: deleteContactAction,
          },
        ],
      },
    ],
  },
])
