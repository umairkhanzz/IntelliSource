import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Navbar/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import "../public/assets/fonts/icons.css";
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Dashboard from './pages/Dashboard/Dashboard'
import Profile from './pages/Dashboard/Profile'
import Users from './pages/Dashboard/Users'
import Comments from './pages/Dashboard/Comments'



function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    )
  }


  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element: <Home />
        },
        {
          path:"/about",
          element: <About />
        },
        {
          path:"/contact",
          element: <Contact />
        },
        {
          path:"/dashboard",
          element: <Dashboard />
        },
        {
          path:"/profile",
          element: <Profile />
        },
        {
          path:"/users",
          element: <Users />
        },
        {
          path:"/comments",
          element: <Comments />
        },
      ]
    },
  ])

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
