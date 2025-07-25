export const loginPost = async (email: string, password: string) => {
  const response = await fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ email, password })
  })

  if (!response.ok) {
    throw new Error('Login failed')
  }
  return await response.json()
}

export const logoutPost = async () => {
  const response = await fetch('http://localhost:3000/auth/logout', {
    method: 'POST',
    credentials: 'include'
  })

  if (!response.ok) {
    throw new Error('Logout failed')
  }
  return await response.json()
}