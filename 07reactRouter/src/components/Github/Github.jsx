import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
function Github() {

  const data = useLoaderData();

  //const [data,setData]=useState([])

  // useEffect(()=>{
  //   fetch('https://api.github.com/users/Shaunak-Suryawanshi')
  //   .then(res=>res.json())
  //   .then(data=>{
  //     console.log(data);
  //     setData(data)
  //   })
  // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github following:{data.following}
    <img src={data.avatar_url} alt="avatar" className='w-32 h-32 rounded-full mx-auto mt-4'/>
    </div>
  )
}

export default Github

export const githubLoader=async()=>{
  const res=await fetch('https://api.github.com/users/Shaunak-Suryawanshi')
  return res.json()
}