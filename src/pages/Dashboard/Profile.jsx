import React from 'react'
import { Link } from 'react-router-dom'
import Head from '../../components/Sidebar/Head'
import Sidebar from '../../components/Sidebar/Sidebar'
import ProfileForm from '../../components/Sidebar/ProfileForm'

const Profile = () => {
  return (
    <div className="dashboard">
      <div className="container mx-auto border-2 border-black p-2">
        <Head />
        <div className="admin-panal flex border-2 border-black p-2 ">
          <Sidebar />
          <ProfileForm />
        </div>
      </div>
    </div>
  )
}

export default Profile