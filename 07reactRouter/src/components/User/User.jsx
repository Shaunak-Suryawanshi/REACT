import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

  const {userid}=useParams();
  return (
    <div className="bg-gray-700 text-white text-3xl text-center p-4 px-1.5 py-1.5">User:{userid}
    </div>
  )
}

export default User