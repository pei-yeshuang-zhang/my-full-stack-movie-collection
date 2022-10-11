import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
  const navigate = useNavigate()
  useEffect(
    () =>
      setTimeout(() => {
        navigate('/')
      }, 1500),
    []
  )
  return <h1>404 Not Found</h1>
}

export default Notfound
