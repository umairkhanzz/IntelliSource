import React from 'react'
import { Link } from 'react-router-dom'
import Head from '../../components/Sidebar/Head'
import Content from '../../components/Sidebar/Content'
import Sidebar from '../../components/Sidebar/Sidebar'


const Dashboard = () => {



    return (
        <>
            <div className="dashboard">
                <div className="lg:container mx-auto border-2 border-black p-2">
                    <Head />
                    <div className="admin-panal flex border-2 border-black p-2 ">
                      <Sidebar />
                      <Content />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Dashboard