import { Contact } from '@/types/contact.types'

export default interface RetrieveContactUseCase {
  /**
   * Retrieves a contact by its unique identifier.
   * @param id The unique identifier of the contact to retrieve.
   * @returns The contact with the specified ID.
   */
  getContact(id: string): Promise<Contact>

  /**
   * Retrieves all contacts.
   * @returns An array of all contacts.
   */
  getContacts(): Promise<Array<Contact>>
}
