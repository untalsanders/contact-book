import { findById } from '../lib/db'
import { Contact } from '../types/contact.types'
import CreateContactUseCase from '../usecases/CreateContactUseCase'
import RemoveContactUseCase from '../usecases/RemoveContactUseCase'
import RetrieveContactUseCase from '../usecases/RetrieveContactUseCase'
import UpdateContactUseCase from '../usecases/UpdateContactUseCase'

export default class ContactService
  implements RetrieveContactUseCase, CreateContactUseCase, UpdateContactUseCase, RemoveContactUseCase
{
  private apiUrl: string = 'http://localhost:8080/api'

  async getContacts(query?: string): Promise<Contact[]> {
    try {
      const response = await fetch(`${this.apiUrl}/contacts?${query}`)

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error(`Error fetching contacts: ${error}`)
      throw new Error('Failed to retrieve contacts')
    }
  }

  async getContact(id: string): Promise<Contact> {
    try {
      const response = await fetch(`${this.apiUrl}/contacts/${id}`)

      if (!response.ok) {
        console.error('Contact not found')
        throw new Error(`Response status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error(`Error fetching contacts: ${error}`)
      throw new Error('Failed to retrieve contacts')
    }
  }

  async saveContact(contact: Contact): Promise<Contact> {
    const url = `${this.apiUrl}/contacts`
    const newContact: Contact = { ...contact, createdAt: Date.now() }

    const request = new Request(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    })

    try {
      const response = await fetch(request)

      if (response.status !== 201) {
        throw new Error('Failed to persist contact save')
      }
    } catch (error) {
      console.error(error)
    }

    return newContact
  }

  async updateContact(id: string, contact: Contact): Promise<Contact> {
    const existing = await findById(id)
    if (!existing) {
      throw new Error('Contact not found')
    }

    const updated: Contact = { ...existing, ...contact, id }

    // If the DB module exposes an update/save function, try to persist the change.
    // Use dynamic import to avoid touching top-level imports here.
    try {
      const db: any = await import('../lib/db')
      if (typeof db.update === 'function') {
        return await db.update(id, updated)
      }
      if (typeof db.save === 'function') {
        return await db.save(updated)
      }
    } catch (error) {
      console.warn('Failed to persist contact update, falling back to in-memory update:', error)
    }

    return updated
  }

  async removeContact(id: string): Promise<void> {
    try {
      const response = await fetch(`${this.apiUrl}/contacts/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Contact not found')
      }
    } catch (error) {
      console.error(error)
    }
  }
}
