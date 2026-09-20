import React from 'react'
import { BadgeCheck } from 'lucide-react'

const Completed = () => {
  return (
    <div className='h-full w-full flex justify-center my-[20%]'>
      <h1 className='flex text-4xl font-bold'><BadgeCheck size={42} strokeWidth={2.3} />Completed-page</h1>
    </div>
  )
}

export default Completed
