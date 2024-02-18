import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-orange-500 flex'>
      <div className='p-7 m-5 mx-4 text-white font-bold text-4xl'>
        Shopify
      </div>
      <div className='flex p-5 gap-20 mx-7 mt-[40px] list-none font-semibold'>
        <div>
        <li className='hover:text-white' >About</li>
        <li className='hover:text-white' >Teams</li>
        <li className='hover:text-white' >Career</li>
        <li className='hover:text-white' >Contact</li>
      </div>
      <div>
        <li className='hover:text-white'>Support</li>
        <li className='hover:text-white'>Investor</li>
        <li className='hover:text-white'>Customer Service</li>
      </div>
      </div>
      
    </div>
  )
}

export default Footer