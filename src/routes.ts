import { createBrowserRouter } from 'react-router'
import About from './about'
import { destroyContactAction, editContactAction } from './actions'
import App from './app'
import ContactCard from './components/contacts/ContactCard'
import EditContact from './edit'
import Home from './home'
import { contactListLoader, contactLoader } from './loaders'
import Trash from './trash'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
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
