import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Profile() {

  const{user} = useContext(UserContext)

  if(!user) return <div>please login</div>

  return <h2>Welcome {user.username}</h2>
  
}

export default Profile