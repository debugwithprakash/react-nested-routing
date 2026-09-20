import React from 'react'
import { useNavigate } from 'react-router-dom'

const NevigateBtn = () => {

    const navigate = useNavigate()

  return (
    <div className='absolute right-5 top-27 flex gap-4'>
      <button onClick={()=>{
        navigate(-1)
      }} className='bg-black text-white rounded-4xl py-2 px-3 active:scale-95'>Back</button>
      <button onClick={()=>{
        navigate('/')
      }} className='bg-black text-white rounded-4xl py-2 px-3 active:scale-95'>Home</button>
      <button onClick={()=>{
        navigate(+1)
      }} className='bg-black text-white rounded-4xl py-2 px-3 active:scale-95'>Next</button>
    </div>
  )
}

export default NevigateBtn
