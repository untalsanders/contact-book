import { Contact } from '../../types/contact.types'

export default function ContactPhoto({ contact }: { contact: Contact }) {
  return (
    <img
      src={contact.avatar ?? '/images/default-avatar.jpeg'}
      alt={`Photo of ${contact.firstname || 'Unknown'}`}
      width={35}
      height={35}
      className="rounded-full p-1"
    />
  )
}
