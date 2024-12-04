import React from 'react'
import { useContext, userContext } from 'react'

function Profile() {
    const {user} = useContext(userContext)

    
  return (
    <div>Profile</div>
  )
}

export default Profile