import React, { useState } from 'react'
import axios from "axios"
import "./Login.scss"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8800/api/auth/login", {
        username,
        password
      })
      console.log(res.data)
    } catch (error) {
      setError(err);
      console.log(err)
    }
    
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input type="text" name="username" placeholder='johndoe' onChange={e=>setUsername(e.target.value)}/>

        <label htmlFor="">Password</label>
        <input type="password" name='password' onChange={e=>setPassword(e.target.value)} />
        <button type='submit'>Login</button>
      </form>

      
    </div>
  )
}

export default Login
