"use client"
import React from 'react'
import {sidebarLinks} from '../../constants/index'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname,useRouter } from 'next/navigation'
import { link } from 'fs'
import { SignedIn, SignOutButton, useAuth } from '@clerk/nextjs'


const LeftSideBar = () => {
  const {userId}=useAuth()
  const router=useRouter();
  const pathname=usePathname();
  return (
    <section className='custom-scroolbar leftsidebar'>
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
         {sidebarLinks.map((links)=>{
          const isActive=(pathname.includes(links.route) && (links.route.length>1) || pathname===links.route);
          if(links.route==='/profile')links.route=`${links.route}/${userId}`
          return <Link href={links.route} key={links.label} className={`leftsidebar_link ${isActive && `bg-primary-500`}`}>
             <Image
              src={links.imgURL}
              alt={links.label}
              width={24}
              height={24}
             />
             <p className='text-light-1 max-lg:hidden'>
               {links.label}
             </p>
          </Link>
         })}
      </div>
      <div className='mt-10 px-6'>
       <SignedIn>
                <SignOutButton>
                  <div className='flex cursor-pointer gap-4 p-4'>
                        <Image
                        src={"/assets/logout.svg"}
                        alt='logout'
                        width={24}
                        height={24}
                        />
                        <p className='text-light-2 max-lg:hidden'>
                           Logout
                        </p>
                  </div>
                </SignOutButton>
        </SignedIn>
      </div>
    </section>
  )
}

export default LeftSideBar