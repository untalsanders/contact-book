import { createBrowserRouter } from 'react-router'
import About from './about'
import { destroyContactAction, editContactAction } from './actions'
import ContactCard from './components/contacts/ContactCard'
import Root from './components/layout/Root'
import EditContact from './edit'
import Home from './home'
import { contactListLoader, contactLoader } from './loaders'
import Trash from './trash'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home, loader: contactListLoader },
      {
        path: 'contacts',
        children: [
          {
            path: ':id',
            Component: ContactCard,
            loader: contactLoader,
            children: [
              {
                path: 'edit',
                Component: EditContact,
                loader: contactLoader,
                action: editContactAction,
              },
              {
                path: 'destroy',
                action: destroyContactAction,
              },
            ],
          },
        ],
      },
      { path: 'about', Component: About },
      { path: 'trash', Component: Trash },
    ],
  },
])
