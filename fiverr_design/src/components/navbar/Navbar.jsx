import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import "./Navbar.scss"

function Navbar() {
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const {pathname} = useLocation()

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive)

        return () => {
            window.removeEventListener("scroll", isActive)
        }
    }, [])

    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true
    }

  return (
    <div className= {active || pathname !=="/" ? 'navbar active': "navbar"}>
          <div className="container">
              <div className="logo">
                  <Link to="/" className='link'>
                      <span className='text'>fiverr</span>
                  </Link>
                  
                  <span className='dot'>.</span>
              </div>

              <div className="links">
                  <span>Fiverr Business</span>
                  <span>Explore</span>
                  <span>English</span>
                  <span>Sign in</span>
                  {!currentUser?.isSeller && <span>Become a Seller</span>}
                  {!currentUser && <button>Join</button>}
                  {currentUser && (
                      <div className="user" onClick={() => setOpen(!open)}>
                          <img src="https://assets.manutd.com/AssetPicker/images/0/0/10/126/687707/Legends-Profile_Cristiano-Ronaldo1523460877263.jpg" alt="" />
                          <span>{currentUser?.username}</span>
                          {open && <div className="options">
                              {
                                  currentUser?.isSeller && (
                                      <>
                                          <Link to="/mygigs" className='link'>Gigs</Link>
                                          <Link to="/add" className='link'>Add New Gig</Link>
                                      </>
                                  )
                              }
                              <Link to="/orders" className='link'>Orders</Link>
                              <Link to="/messages" className='link'> Messages</Link>
                              <Link to="/" className='link'>Log out</Link>
                          </div>}
                      </div>
                      
                  )}
              </div>
          </div>
          { active &&
              <>
              <hr />
              
              <div className="menu">
                  
                  <Link className='link menuLink' to="/">
                      Graphics & design
                  </Link>
                  <Link className='link' to="/">
                      Video & Animation
                  </Link>
                  <Link className='link' to="/">
                      Writing & Translation
                  </Link>
                  <Link className='link' to="/">
                      AI services
                  </Link>
                  <Link className='link' to="/">
                      Digital Marketing
                  </Link>
                  <Link className='link' to="/">
                      Music & audio
                  </Link>
                  <Link className='link' to="/">
                      Programming & Tech
                  </Link>
                  <Link className='link' to="/">
                      Business
                  </Link>
                  <Link className='link' to="/">
                      Lifestyle
                  </Link>
              </div>

              <hr />

              
                   
              </>
          }
          
    </div>
  )
}

export default Navbar
