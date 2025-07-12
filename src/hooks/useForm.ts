import React, { useState } from 'react'

export const useForm = <T extends Record<string, unknown>>(initialFormState: T) => {

  const [formState, setFormState] = useState<T>(initialFormState)

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value
    })) 
  }

  const resetForm = () => {
    setFormState(initialFormState)
  }

  return {
    formState,
    onInputChange,
    resetForm,
    ...formState
  }
}