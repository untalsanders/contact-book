'use strict'

import { ActionFunctionArgs, redirect } from 'react-router'
import ContactService from './services/ContactService'

const contactService = new ContactService()

export const saveContactAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const contact = Object.fromEntries(formData)
  await contactService.saveContact(contact)
  return redirect('/')
}

export const editContactAction = async ({ request, params }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)
  await contactService.updateContact(params.id!, updates as any)
  return redirect(`/contacts/${params.id}`)
}

export const destroyContactAction = async ({ params }: ActionFunctionArgs) => {
  await contactService.removeContact(params.id!)
  return redirect('/')
}
