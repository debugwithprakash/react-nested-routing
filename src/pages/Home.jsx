import React from 'react'
import { House } from 'lucide-react'

const Home = () => {
  return (
    <div>
      <h1 className='ml-5'>Write anything after / in searchbar to see the example of Not-found Rout..</h1>

      <div className='h-full w-full flex justify-center my-[20%]'>
        <h1 className='flex text-4xl font-bold'><House size={42} strokeWidth={2.3} />Home-page</h1>
      </div>
    </div>
  )
}

export default Home