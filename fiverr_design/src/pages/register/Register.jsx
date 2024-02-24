import React from 'react'
import './Register.scss'

function Register() {
  return (
    <div className='register'>
      <form action="">
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input type="text" name='username' placeholder='johndoe' />
          <label htmlFor="">Email</label>
          <input type="email" name='email' placeholder='email@email.com' />
          <label htmlFor="">Password</label>
          <input type="password" name='password' />
          <label htmlFor="">Profile Picture</label>
          <input type="file" />
          <label htmlFor="">Country</label>
          <input type="text" name='country' placeholder='usa' />
          <button type='submit'>Register</button>
        </div>

        <div className="right">
          <h1>I want to become a Seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label htmlFor="" className='switch'>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Phone number</label>
          <input type="text" name='phone' placeholder='+1 234 567 89' />
          <label htmlFor="">Description</label>
          <textarea name="desc" id="" cols="30" rows="10" placeholder='A short description of yourself'></textarea>
        </div>
      </form>
    </div>
  )
}

export default Register
