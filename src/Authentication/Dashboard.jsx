import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Dashboard() {
  const [name, setName] = useState('')
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:8081')
    .then( res => {
      if(res.data.valid){
        setName(res.data.name);
      }
      else {
        navigate('/Signup')
      }
    })
    .catch(err => console.log(err))
  },[])
  return (
    <div>Hello Bro...{name}</div>
  )
}

export default Dashboard