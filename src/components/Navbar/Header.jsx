import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className="header">
      <div className="lg:container flex justify-between items-center p-2 mx-auto ">
        <div className="logo py-1 px-2">
          <img src="/assets/images/logo.png" alt="logo" />
        </div>
        <div className="links px-2">
          <ul className='flex gap-2 justify-between item-center font-semibold'>
            <Link className='bg-slate-100 px-6 py-3 rounded-full' to="/"><li>Home</li></Link>
            <Link className='hover:bg-slate-100 px-6 py-3 rounded-full' to="/about"><li>About</li></Link>
            <Link className='hover:bg-slate-100 px-6 py-3 rounded-full' to="/contact"><li>Contact</li></Link>
            <Link className='hover:bg-slate-100 px-6 py-3 rounded-full' to="/dashboard"><li>Dashboard</li></Link>
          </ul>
        </div>
        <div className="accounts flex justify-between gap-2 text-xl p-2">
          <div className="search relative">
            <span className="icon-search cursor-pointer hover:bg-slate-100 px-3 py-3 rounded-full"></span>
            <div className="search-down hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] absolute bg-white rounded text-sm px-2 py-[3px] left-[-5px] bottom-[-40px]">
              Search
            </div>
          </div>
          <div className="notify relative">
            <span className="icon-bell cursor-pointer hover:bg-slate-100 px-3 py-3 rounded-full"></span>
            <div className="notify-down hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] absolute bg-white rounded text-sm px-2 py-[3px] left-[-5px] bottom-[-40px]">
              Notification
            </div>
          </div>
          <div className="account relative">
            <span className="icon-user cursor-pointer hover:bg-slate-100 px-3 py-3 rounded-full"></span>
            <div className="account-down hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] absolute bg-white rounded text-sm px-2 py-[3px] left-[-5px] bottom-[-40px]">
              Account
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header