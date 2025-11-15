import { createBrowserRouter } from 'react-router'
import AboutPage from './pages/about'
import { destroyContactAction, editContactAction } from './actions'
import ContactCard from './components/contacts/ContactCard'
import Root from './components/layout/Root'
import EditContact from './edit'
import HomePage from './pages/home'
import { contactListLoader, contactLoader } from './loaders'
import TrashPage from './pages/trash'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage, loader: contactListLoader },
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
      { path: 'about', Component: AboutPage },
      { path: 'trash', Component: TrashPage },
    ],
  },
])
