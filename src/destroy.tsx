'use strict'

import { redirect, ActionFunctionArgs } from 'react-router'
import { deleteContact } from '../data/contacts'

export const action = async ({ params }: ActionFunctionArgs) => {
  await deleteContact(params.id)
  return redirect('/')
}
