import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter,RouterProvider,createBrowserRouter } from 'react-router-dom'
import Academics from './Academics'
import Research from './Research'
import Head from './Head'
import Students from './Students'
import Faculties from './Faculties'
import Contact from './Contact'
import SecNav from './SecNav'
import Footer from './Footer'
import Cse from './Cse'
import Placement from './Placement'
import Library from './Library'
import NSS from './NSS'
import Dashboard from '../Authentication/Dashboard'
import Register from '../Authentication/Register'
import Signup from '../Authentication/Signup'

function Home() {
    const router = createBrowserRouter([
        {
          path :'/',
          element :<><Head/></>
        },
        {
          path :'/Academics',
          element :<><Academics/></>
        },
        {
          path : '/Research',
          element: <> <Navbar/><Research/></>
        },
        {
          path : '/Students',
          element: <><Students/></>
        },
        {
          path : '/Faculties',
          element: <><Faculties/></>
        },
        {
          path : '/Contact',
          element: <><SecNav/><Contact/><Footer/></>
        },
        {
          path : '/Cse',
          element: <><Cse/></>
        },
        {
          path: '/Placement',
          element: <><Placement/></>
        },
        {
          path: '/Library',
          element: <><Library/></>
        },
        {
          path: '/NSS',
          element: <><NSS/></>
        },
        {
          path: '/Signup',
          element: <><Signup/></>
        },
        {
          path: '/register',
          element: <><Register/></>
        },
        {
          path: '/dashboard',
          element: <><Dashboard/></>
        }

       
      ])
    return (
        <>
            <RouterProvider router = {router}/>
        </>
    )
}

export default Home
