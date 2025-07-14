import { createContext}  from 'react'
import type { AuthContextType } from './AuthContextType'

// 2 creamos el contexto
export const AuthContext = createContext<AuthContextType | undefined>(undefined)
