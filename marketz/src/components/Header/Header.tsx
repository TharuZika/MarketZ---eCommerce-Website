import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import LogoutIcon from '@mui/icons-material/Logout';
import CartIcon from '@mui/icons-material/ShoppingCart';

export default class Header extends Component {
  render() {

    // const activeLink = "border-b-2 cursor-pointer select-none";
    // const normalLink = "cursor-pointer select-none";
    // const activeProfile = "rounded-full border-2 cursor-pointer select-none";

    return (
        // <div>
        //     <div className='w-full h-20 z-10 font-bold text-6xl bg-slate-800 text-white top-0 shadow-md fixed shadow-neutral-900'>
        //         <div className='flex  text-white w-full h-full items-center'>
        //             <div className='w-1/2 pl-4'>
        //                 <img src={logo} alt="" className='select-none w-90 h-16 cursor-pointer'/>
        //             </div>
        //             <div className='w-1/2'>
        //                 <div className='flex w-full justify-between text-2xl pr-5'>
        //                     <NavLink to={'/'} className={({isActive}) => isActive ? activeLink : normalLink }>Home</NavLink>
        //                     <NavLink to={'/about'} className={({isActive}) => isActive ? activeLink : normalLink }>About Us</NavLink>
        //                     <NavLink to={'/contact'} className={({isActive}) => isActive ? activeLink : normalLink }>Contact Us</NavLink>
        //                     <NavLink to={'/profile'} className={({isActive}) => isActive ? activeProfile : normalLink }><img src={profileImg} alt="" className='w-10 h-10 cursor-pointer'/></NavLink>
        //                     <NavLink to={'/login'} className={({isActive}) => isActive ? activeLink : normalLink }><LogoutIcon/></NavLink>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="w-full h-20 border-gray-200 bg-gray-900 top-0 fixed z-10">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href={'/'} className="flex items-center">
        <img src={logo} alt="" className="h-8 mr-3"/>
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MarketZ</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
         <NavLink to={'/'} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</NavLink>
        </li>
        <li>
          <NavLink to={'/about'} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to={'/cart'} className="block relative py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><CartIcon/>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-600 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">8</div></NavLink>
          
        </li>
<li>
          <NavLink to={'/login'} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><LogoutIcon/></NavLink>
        </li>

      </ul>
    </div>
  </div>
</div>
    )
  }
}
