import React from 'react'
import { Copyright } from 'lucide-react'

const Footer = () => {
    return (
        <div>
            <footer className='bg-black absolute bottom-0 w-full p-4 flex items-center justify-center'>
                <h3 className='text-white flex items-center gap-1 text-sm'><Copyright size={12} /> 2026 All Rights Reserved. Designed & Developed by Prakash Kumar.</h3>
            </footer>
        </div>
    )
}

export default Footer
