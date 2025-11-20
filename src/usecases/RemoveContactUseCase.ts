export default interface RemoveContactUseCase {
  /**
   * Removes a contact with the specified ID.
   *
   * @param id - The ID of the contact to remove.
   * @throws {Error} If the contact with the specified ID is not found.
   */
  removeContact(id: string): void
}
