import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { LayoutDashboard } from 'lucide-react'


const Dashboard = () => {
  return (
    <div>
      
      <div className='flex gap-5 ml-5'>
        <Link className='text-black' to='overview'>Overview</Link>
        <Link className='text-black' to='profile'>Profile</Link>
        <Link className='text-black' to='courses'>Courses</Link>
        <Link className='text-black' to='enrolled'>Enrolled</Link>
        <Link className='text-black' to='completed'>Completed</Link>
        <Link className='text-black' to='setting'>Setting</Link>
      </div>
      
      <Outlet />
    </div>
  )
}

export default Dashboard
