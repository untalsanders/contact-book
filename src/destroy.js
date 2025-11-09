'use strict'

import { redirect } from 'react-router'
import { deleteContact } from '../data/contacts'

export const action = async ({ params }) => {
  await deleteContact(params.id)
  return redirect('/')
}
