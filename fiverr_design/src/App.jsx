import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'

import reactLogo from './assets/react.svg'
import './App.scss'

import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Orders from './pages/orders/Orders'
import Message from './pages/message/Message'
import Messages from './pages/messages/Messages'
import Gigs from './pages/gigs/Gigs'
import MyGigs from './pages/myGigs/MyGigs'
import Gig from './pages/Gig/Gig'
import Add from './pages/add/Add'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Success from './pages/success/Success'
import Pay from './pages/Pay/Pay'

function App() {
  const queryClient = new QueryClient()

  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
            <Outlet/>
          <Footer />
        </QueryClientProvider>         
        
     </div>
    )
  } 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [ 
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/gigs",
          element: <Gigs/>
        },
       
        {
          path: "/Orders",
          element: <Orders/>
        },
        {
          path: "/mygigs",
          element: <MyGigs/>
        },
        {
          path: "/gig/:id",
          element: <Gig/>
        },
        {
          path: "/add",
          element: <Add/>
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/message/:id",
          element: <Message/>
        }
        ,
        {
          path: "/pay/:id",
          element: <Pay/>
        },
        {
          path: "/success",
          element: <Success/>
        }
        
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
    
  )
}

export default App
