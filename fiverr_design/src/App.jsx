import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

function App() {
  const layout = () => {
    return (
      <div className="app">
         <Navbar />
          <Outlet/>
      // <Foooter/>
     </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    }
  ])

  return (37:55
    <>
      <RouterProvider router={router}/>
    </>
    
  )
}

export default App
