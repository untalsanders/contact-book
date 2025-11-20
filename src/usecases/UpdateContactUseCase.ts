import { Contact } from '@/types/contact.types'

export default interface UpdateContactUseCase {
  /**
   * Updates a contact by its unique identifier.
   * @param id The unique identifier of the contact to update.
   * @param contact The updated contact data.
   * @returns The updated contact.
   */
  updateContact(id: string, contact: Contact): Promise<Contact>
}
