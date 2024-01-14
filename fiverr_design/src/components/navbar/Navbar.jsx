import React, { useEffect } from 'react'
// import { Link } from "react-router-dom";
import { useState } from 'react';
import "./Navbar.scss"

function Navbar() {
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

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
    <div className= {active ? 'navbar active': "navbar"}>
          <div className="container">
              <div className="logo">
                  {/* <Link to="/"> */}
                      <span className='text'>fiverr</span>
                  {/* </Link> */}
                  
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
                                          <span>Gigs</span>
                                          <span>Add New Gig</span>
                                      </>
                                  )
                              }
                              <span>Orders</span>
                              <span>Messages</span>
                              <span>Log out</span>
                          </div>}
                      </div>
                      
                  )}
              </div>
          </div>
          { active &&
              <>
                  <hr />
                  <div className="menu">
                        <span>Test</span>
                        <span>Test2</span>
                    </div>
                   
              </>
          }
          
    </div>
  )
}

export default Navbar
