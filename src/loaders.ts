import { LoaderFunctionArgs } from 'react-router'
import ContactService from './services/contactService'

const contactService = new ContactService()

export const contactListLoader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url)
  const q = url.searchParams.get('q') ?? undefined
  return { contacts: await contactService.getContacts(q), q }
}

export const contactLoader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id
  if (!id) throw new Error('No ID')
  return { contact: await contactService.getContact(id) }
}
