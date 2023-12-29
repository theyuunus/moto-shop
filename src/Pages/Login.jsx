import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import Login from '../components/Login/Login'

export default function login() {
  return (
    <Helmet title="Login">
      <Login />
    </Helmet>
  )
}
