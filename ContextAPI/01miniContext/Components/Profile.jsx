import React from 'react'
import { useContext, userContext } from 'react'

function Profile() {
    const {user} = useContext(userContext)

    
  if (user) return <div>please login</div>

  return <div>welcone {user.username}</div>
  
}

export default Profile