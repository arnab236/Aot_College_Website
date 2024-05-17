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
          element: <> <Navbar/><Students/></>
        },
        {
          path : '/Faculties',
          element: <> <Navbar/><Faculties/></>
        },
        {
          path : '/Contact',
          element: <><SecNav/><Contact/><Footer/></>
        },
       
      ])
    return (
        <>
            <RouterProvider router = {router}/>
        </>
    )
}

export default Home
