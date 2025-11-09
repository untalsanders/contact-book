export interface Contact {
  id: string
  first?: string
  last?: string
  avatar?: string | null
  twitter?: string
  notes?: string
  favorite: boolean
  createAt?: number
}
