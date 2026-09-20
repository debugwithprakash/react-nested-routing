import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between py-5 px-8 border border-b-2'>
        <h2 className='text-white text-2xl font-semibold border rounded-4xl py-3 px-4 border-none outline-none bg-black cursor-pointer'>Logo</h2>
        <div className='flex gap-7 items-center bg-black text-lg font-bold border rounded-4xl py-2 px-7 border-none outline-none'>
            <Link className='text-white' to='/'>Home</Link>
            <Link className='text-white' to='/about'>About</Link>
            <Link className='text-white' to='/dashboard'>Dashboard</Link>
            <Link className='text-white' to='/contact'>Contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
