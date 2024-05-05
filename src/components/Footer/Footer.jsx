import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="cover">
      <div className="wrap bg-gray-100">
        <div className="lg:container mx-auto flex justify-between flex-wrap lg:flex-nowrap ">
          <div className="combine flex flex-wrap sm:flex-nowrap w-full">
            <div className="one w-full px-4 py-2 m-2">
              <h1 className="font-semibold mb-3" >CATEGORIES</h1>
              <ul>
                <li className="mb-2 text-sm text-gray-700 hover:text-blue-500"><Link to="/">Women</Link></li>
                <li className="mb-2 text-sm text-gray-700 hover:text-blue-500"><Link to="/">Men</Link></li>
                <li className="mb-2 text-sm text-gray-700 hover:text-blue-500"><Link to="/">Accessories</Link></li>
                <li className="mb-2 text-sm text-gray-700 hover:text-blue-500"><Link to="/">Shoes</Link></li>
                <li className="mb-2 text-sm text-gray-700 hover:text-blue-500"><Link to="/">New Arrival</Link></li>
                <li className="mb-2 text-sm text-gray-700 hover:text-blue-500"><Link to="/">Clearence</Link></li>
              </ul>
            </div>
            <div className="two w-full px-4 py-2 m-2">
              <h1 className="font-semibold mb-3" >BUY WITH US</h1>
              <ul>
                <li className="mb-2 text-sm text-gray-700 hover:text-blue-500"><Link to="/">About Us</Link></li>
                <li className="mb-2 text-sm text-gray-700 hover:text-blue-500"><Link to="/">Services</Link></li>
                <li className="mb-2 text-sm text-gray-700 hover:text-blue-500"><Link to="/">Contact Us</Link></li>
                <li className="mb-2 text-sm text-gray-700 hover:text-blue-500"><Link to="/">FAQs</Link></li>
                <li className="mb-2 text-sm text-gray-700 hover:text-blue-500"><Link to="/">Privacy Policy</Link></li>
                <li className="mb-2 text-sm text-gray-700 hover:text-blue-500"><Link to="/">Cookie Policy</Link></li>
                <li className="mb-2 text-sm text-gray-700 hover:text-blue-500"><Link to="/">Terms and Conditions</Link></li>
              </ul>
            </div>
          </div>
          <div className="combine2 flex flex-wrap sm:flex-nowrap w-full" >
            <div className="three w-full px-4 py-2 m-2">
              <h1 className="font-semibold mb-3" >ABOUT</h1>
              <p className="text-gray-700 text-sm" >
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tempor incididunt.
              </p>
            </div>
            <div className="four w-full  px-4 py-2 m-2">
              <h1 className="font-semibold mb-3" >BUY WITH US</h1>
              <ul>
                <li className="mb-2 text-sm text-gray-700 "><span className="text-black  mr-1">ADDRESS:</span> 7895 Piermont Dr NE Albuquerque, NM 198866, United States of America</li>
                <li className="mb-2 text-sm text-gray-700 "><span className="text-black  mr-1">PHONE:</span> +566 4774 9930; +566 4774 9940</li>
                <li className="mb-2 text-sm text-gray-700 "><span className="text-black  mr-1">HOURS:</span> all week from 9 am to 9 pm</li>
                <li className="mb-2 text-sm text-gray-700 "><span className="text-black  mr-1">E-MAIL:</span> info@mydomain.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer bg-white p-2">
        <div className="container flex items-center justify-center  px-4 py-2 mx-auto">
          <div className="left-area flex items-center px-2 mb-3 md:mb-0  ">
            <img className="w-28" src="/assets/images/logo.png" alt="footer-logo" />
            <p className="text-sm  flex item-center text-gray-700 ml-3"><span>&#169;</span> Wokiee 2022. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer