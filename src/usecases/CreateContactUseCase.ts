import { Contact } from '../types/contact.types'

export default interface CreateContactUseCase {
  /**
   * Creates a new contact with the given ID and contact information.
   * @param id The unique identifier for the contact.
   * @param contact The contact information to be stored.
   * @returns A promise that resolves to the created contact.
   */
  saveContact(contact: Contact): Promise<Contact>
}
