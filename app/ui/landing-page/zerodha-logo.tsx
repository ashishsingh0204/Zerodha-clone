import Image from 'next/image'
import React from 'react'

export default function ZerodhaLogo() {
  return (
    <div className='h-full flex flex-col justify-center'>
        <Image src="https://zerodha.com/static/images/logo.svg" width={300} height={80} alt="Zerodha Logo"></Image>
    </div>
  )
}
