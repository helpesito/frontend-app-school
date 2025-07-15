import type { LoginFormState } from '../components/loginType'
import type { User } from '../components/userType'

// 1 definimos la forma del contexto
export interface AuthContextType {
  user: User | null
  // eslint-disable-next-line no-unused-vars
  login: (logiData: LoginFormState) => Promise<void>
  logout: () => Promise<void>
}