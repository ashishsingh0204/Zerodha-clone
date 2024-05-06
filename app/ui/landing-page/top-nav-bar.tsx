import React from 'react'
import NavLinks from './nav-links'
import Image from 'next/image'
import ZerodhaLogo from './zerodha-logo'

export default function TopNavBar() {
  return (
    <div className='flex flex-row h-24 justify-between px-20 shadow-md'>
        <ZerodhaLogo/>
        <div className='h-full flex flex-row'>
            <NavLinks></NavLinks>
        </div>
    </div>
  )
}
