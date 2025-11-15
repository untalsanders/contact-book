'use strict'

import localforage from 'localforage'
import { Contact } from '../types/contact.types'
import { fakeNetwork } from './utils'

const apiUrl = 'http://localhost:8080/api'

export const set = async (contacts: Contact[]) => await localforage.setItem('contacts', contacts)

export const findAll = async (query?: string): Promise<Contact[]> => {
  await fakeNetwork(`contacts:${query}`)
  try {
    const response = await fetch(`${apiUrl}/contacts`)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('Unknown error')
    }
    return []
  }
}

export const findById = async (id: string): Promise<Contact | undefined> => {
  await fakeNetwork(`contact:${id}`)
  try {
    const response = await fetch(`${apiUrl}/contacts/${id}`)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('Unknown error')
    }
  }
}

export const save = async (): Promise<Contact> => {
  await fakeNetwork()
  let id = Math.random().toString(36).substring(2, 9)
  let contact: Contact = { id, createdAt: Date.now(), favorite: false }
  let contacts = await findAll()
  contacts.unshift(contact)
  await set(contacts)
  return contact
}

export const update = async (id: string, updates: Contact): Promise<Contact> => {
  await fakeNetwork()
  let contacts = await findAll()
  let contact = contacts.find(contact => contact.id === id)
  if (!contact) throw new Error(`No contact found ${id}`)
  Object.assign(contact, updates)
  await set(contacts)
  return contact
}

export const remove = async (id: string) => {
  let contacts = await findAll()
  let index = contacts.findIndex(contact => contact.id === id)
  if (index > -1) {
    contacts.splice(index, 1)
    await set(contacts)
    return true
  }
  return false
}
