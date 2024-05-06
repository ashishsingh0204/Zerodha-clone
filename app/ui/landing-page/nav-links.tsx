import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export default function NavLinks() {
    const items = [{
        name: "Signup",
        href: "/landing-page/sign-up"
    },
    {
        name: "About",
        href: "/landing-page/about"
    },
    {
        name: "Products",
        href: "/landing-page/products"
    },
    {
        name: "Pricing",
        href: "/landing-page/pricing"
    },
    {
        name: "Support",
        href: "/landing-page/support"
    }]
  return (
    <div className="f-full flex flex-row space-x-12 text-xl text-gray-500 ">
        {items.map((item) => <Link
        key={item.name}
        href={item.href}>
            <p className="hidden md:block py-8 ">{item.name}</p>
        </Link>)}
        <Link href="/"><Bars3Icon className="w-6 py-8"></Bars3Icon></Link>
    </div>
  )
}
