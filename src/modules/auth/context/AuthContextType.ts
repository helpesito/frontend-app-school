import type { User } from '../components/userType'

// 1 definimos la forma del contexto
export interface AuthContextType {
  user: User | null
  // eslint-disable-next-line no-unused-vars
  login: (_userData: User) => void
  logout: () => void
}