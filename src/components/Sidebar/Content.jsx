import React from 'react'
import { Link } from 'react-router-dom'

const Content = () => {
    return (
        <div className="right-side w-full border-2 border-red-700 p-4">
            <div className="analytics flex justify-between gap-5 mb-4 border-2 border-black px-2 py-1">
                <div className="users rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full flex justify-between border-2 border-blue-700 p-4">
                    <div className="text">
                        <p className='text-xl font-semibold text-gray-600 mb-2'>TOTAL USERS</p>
                        <p className='text-4xl font-bold mb-4'>23</p>
                        <p>11 Last Month !</p>
                    </div>
                    <div className="icon p-2">
                        <span className="icon-search cursor-pointer text-xl text-white bg-red-500 px-4 py-4 rounded-full"></span>
                    </div>
                </div>
                <div className="comment rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full flex justify-between border-2 border-blue-700 p-4">
                    <div className="text">
                        <p className='text-xl font-semibold text-gray-600 mb-2'>TOTAL COMMENTS</p>
                        <p className='text-4xl font-bold mb-4'>467</p>
                        <p>11 Last Month !</p>
                    </div>
                    <div className="icon p-2">
                        <span className="icon-search cursor-pointer text-xl text-white bg-blue-700 px-4 py-4 rounded-full"></span>
                    </div>
                </div>
                <div className="post rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full flex justify-between border-2 border-blue-700 p-4">
                    <div className="text">
                        <p className='text-xl font-semibold text-gray-600 mb-2'>TOTAL POSTS</p>
                        <p className='text-4xl font-bold mb-4'>78</p>
                        <p>131 Last Month !</p>
                    </div>
                    <div className="icon p-2">
                        <span className="icon-search cursor-pointer text-xl text-white bg-orange-600 px-4 py-4 rounded-full"></span>
                    </div>
                </div>
            </div>
            <div className="tables-section flex justify-between gap-5 mb-6 border-2 border-black px-2 py-1">
                <div className="recent-users rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full border-2 border-blue-700 p-4">
                    <div className="btn flex mb-2 justify-between">
                        <p className='text-lg font-semibold'>Recent Users</p>
                        <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">See All</button>
                    </div>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3 rounded-s-lg">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Qty
                                    </th>
                                    <th scope="col" className="px-6 py-3 rounded-e-lg">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="px-6 py-4">
                                        1
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="px-6 py-4">
                                        1
                                    </td>
                                    <td className="px-6 py-4">
                                        $1999
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td className="px-6 py-4">
                                        1
                                    </td>
                                    <td className="px-6 py-4">
                                        $99
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr className="font-semibold text-gray-900 dark:text-white">
                                    <th scope="row" className="px-6 py-3 text-base">Total</th>
                                    <td className="px-6 py-3">3</td>
                                    <td className="px-6 py-3">21,000</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div className="recent-commnets rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full border-2 border-blue-700 p-4">
                    <div className="btn flex mb-2 justify-between">
                        <p className='text-lg font-semibold'>Recent Commnets</p>
                        <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">See All</button>
                    </div>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3 rounded-s-lg">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Qty
                                    </th>
                                    <th scope="col" className="px-6 py-3 rounded-e-lg">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="px-6 py-4">
                                        1
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="px-6 py-4">
                                        1
                                    </td>
                                    <td className="px-6 py-4">
                                        $1999
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td className="px-6 py-4">
                                        1
                                    </td>
                                    <td className="px-6 py-4">
                                        $99
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr className="font-semibold text-gray-900 dark:text-white">
                                    <th scope="row" className="px-6 py-3 text-base">Total</th>
                                    <td className="px-6 py-3">3</td>
                                    <td className="px-6 py-3">21,000</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            <div className="posts-section flex justify-between gap-5 mb-6 border-2 border-black px-2 py-1">
                <div className="recent-users rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full border-2 border-blue-700 p-4">
                    <div className="btn flex mb-2 justify-between">
                        <p className='text-lg font-semibold'>Recent Posts</p>
                        <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">See All</button>
                    </div>
                    <div className="relative overflow-x-auto  sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Accessories
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Available
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Weight
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="px-6 py-4">
                                        Silver
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td className="px-6 py-4">
                                        Yes
                                    </td>
                                    <td className="px-6 py-4">
                                        Yes
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                    <td className="px-6 py-4">
                                        3.0 lb.
                                    </td>
                                    <td className="flex items-center px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="px-6 py-4">
                                        White
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td className="px-6 py-4">
                                        No
                                    </td>
                                    <td className="px-6 py-4">
                                        Yes
                                    </td>
                                    <td className="px-6 py-4">
                                        $1999
                                    </td>
                                    <td className="px-6 py-4">
                                        1.0 lb.
                                    </td>
                                    <td className="flex items-center px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td className="px-6 py-4">
                                        Black
                                    </td>
                                    <td className="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                        Yes
                                    </td>
                                    <td className="px-6 py-4">
                                        No
                                    </td>
                                    <td className="px-6 py-4">
                                        $99
                                    </td>
                                    <td className="px-6 py-4">
                                        0.2 lb.
                                    </td>
                                    <td className="flex items-center px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple Watch
                                    </th>
                                    <td className="px-6 py-4">
                                        Black
                                    </td>
                                    <td className="px-6 py-4">
                                        Watches
                                    </td>
                                    <td className="px-6 py-4">
                                        Yes
                                    </td>
                                    <td className="px-6 py-4">
                                        No
                                    </td>
                                    <td className="px-6 py-4">
                                        $199
                                    </td>
                                    <td className="px-6 py-4">
                                        0.12 lb.
                                    </td>
                                    <td className="flex items-center px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple iMac
                                    </th>
                                    <td className="px-6 py-4">
                                        Silver
                                    </td>
                                    <td className="px-6 py-4">
                                        PC
                                    </td>
                                    <td className="px-6 py-4">
                                        Yes
                                    </td>
                                    <td className="px-6 py-4">
                                        Yes
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                    <td className="px-6 py-4">
                                        7.0 lb.
                                    </td>
                                    <td className="flex items-center px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple AirPods
                                    </th>
                                    <td className="px-6 py-4">
                                        White
                                    </td>
                                    <td className="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                        No
                                    </td>
                                    <td className="px-6 py-4">
                                        Yes
                                    </td>
                                    <td className="px-6 py-4">
                                        $399
                                    </td>
                                    <td className="px-6 py-4">
                                        38 g
                                    </td>
                                    <td className="flex items-center px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        iPad Pro
                                    </th>
                                    <td className="px-6 py-4">
                                        Gold
                                    </td>
                                    <td className="px-6 py-4">
                                        Tablet
                                    </td>
                                    <td className="px-6 py-4">
                                        No
                                    </td>
                                    <td className="px-6 py-4">
                                        Yes
                                    </td>
                                    <td className="px-6 py-4">
                                        $699
                                    </td>
                                    <td className="px-6 py-4">
                                        1.3 lb.
                                    </td>
                                    <td className="flex items-center px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Keyboard
                                    </th>
                                    <td className="px-6 py-4">
                                        Black
                                    </td>
                                    <td className="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                        Yes
                                    </td>
                                    <td className="px-6 py-4">
                                        Yes
                                    </td>
                                    <td className="px-6 py-4">
                                        $99
                                    </td>
                                    <td className="px-6 py-4">
                                        453 g
                                    </td>
                                    <td className="flex items-center px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple TV 4K
                                    </th>
                                    <td className="px-6 py-4">
                                        Black
                                    </td>
                                    <td className="px-6 py-4">
                                        TV
                                    </td>
                                    <td className="px-6 py-4">
                                        Yes
                                    </td>
                                    <td className="px-6 py-4">
                                        No
                                    </td>
                                    <td className="px-6 py-4">
                                        $179
                                    </td>
                                    <td className="px-6 py-4">
                                        1.78 lb.
                                    </td>
                                    <td className="flex items-center px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        AirTag
                                    </th>
                                    <td className="px-6 py-4">
                                        Silver
                                    </td>
                                    <td className="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                        Yes
                                    </td>
                                    <td className="px-6 py-4">
                                        No
                                    </td>
                                    <td className="px-6 py-4">
                                        $29
                                    </td>
                                    <td className="px-6 py-4">
                                        53 g
                                    </td>
                                    <td className="flex items-center px-6 py-4">
                                        <Link to={"?"} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                        <Link to={"?"} className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Content