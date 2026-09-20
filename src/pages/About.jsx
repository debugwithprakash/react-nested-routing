import React from 'react'
import { Info } from 'lucide-react'

const About = () => {
  return (
    <div>
      <h1 className='ml-5'>Write anything after / in searchbar to see the example of Not-found Rout..</h1>
      
      <div className='h-full w-full flex justify-center my-[20%]'>
        <h1 className='flex text-4xl font-bold'><Info size={42} />About-page</h1>
      </div>
    </div>
  )
}

export default About
