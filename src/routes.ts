import { createBrowserRouter } from 'react-router'
import { destroyContactAction, editContactAction } from './actions'
import ContactCard from './components/contacts/ContactCard'
import ContactForm from './components/contacts/ContactForm'
import Root from './components/layout/Root'
import EditContact from './edit'
import { contactListLoader, contactLoader } from './loaders'
import AboutPage from './pages/about'
import HomePage from './pages/home'
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
            path: 'new',
            Component: ContactForm,
          },
          {
            path: ':id',
            Component: ContactCard,
            loader: contactLoader,
          },
          {
            path: ':id/edit',
            Component: EditContact,
            loader: contactLoader,
            action: editContactAction,
          },
          {
            path: ':id/destroy',
            action: destroyContactAction,
          },
        ],
      },
      { path: 'about', Component: AboutPage },
      { path: 'trash', Component: TrashPage },
    ],
  },
])
