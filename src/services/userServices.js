export const createUser = async ({ username, email }) => {
  const res = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email })
  })
  return res.json()
}

export const getUser = async (id) => {
  const res = await fetch(`/api/users/${id}`, {
    method: 'GET'
  })
  return res.json()
}

export const updateUser = async (id, data) => {
  const res = await fetch(`/api/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return res.json()
}

export const deleteUser = async (id) => {
  const res = await fetch(`/api/users/${id}`, {
    method: 'DELETE'
  })
  return res.json()
}

export const listUsers = async () => {
  const res = await fetch(`/api/users`, {
    method: 'GET'
  })
  return res.json()
}
