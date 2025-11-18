export type Contact = {
  id: string
  firstname?: string
  lastname?: string
  phone?: string
  avatar?: string | null
  twitter?: string
  notes?: string
  favorite: boolean
  createdAt?: number
}
