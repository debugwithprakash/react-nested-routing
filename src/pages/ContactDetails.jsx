import React from 'react'
import { useParams } from 'react-router-dom'

const ContactDetails = () => {

    const param = useParams()

    return (
        <div className='mx-auto my-[20%]'>
            <h1 className='flex text-4xl font-bold capitalize'>{param.id} Contact details</h1>
        </div>
    )
}

export default ContactDetails
