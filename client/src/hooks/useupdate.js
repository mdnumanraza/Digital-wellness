import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useUpdate = () => {
  // const apiurl = 'http://localhost:8002'
  const apiurl = 'https://digital-wellness-brown.vercel.app'
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const update = async (updatedata,userid) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(apiurl + `/api/user/update/${userid}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ updatedata })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { update, isLoading, error }
}