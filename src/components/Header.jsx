import React from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, LogOutIcon, User, User2 } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/Button'
import { useSession } from 'next-auth/react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import Image from 'next/image'

const Header = async () => {
  
  let session = await getServerSession(authOptions)

  console.log("Session is => " , session)



  // if (session?.user)
  //   {
  //     redirect("/")
  //   } 

  // console.log(session)
  
  return (
    <div className='bg-gray-200 p-3' >
        <div className='container mx-auto' >
            
            <div className='flex justify-between' > 

            <div>
                {/* left */}
                <h2 className='text-3xl font-mono font-semibold' >
                    Logo
                </h2>
            </div>
            {/* right */}

            <div>

              {
                session ? 
            <Menubar>
  <MenubarMenu>
    <MenubarTrigger>
        <Avatar>
  <AvatarImage src={session?.user?.image || "/default-avatar.png"} alt="User Avatar" />
  <AvatarFallback>
    {session?.user?.name?.[0] || "U"}
  </AvatarFallback>
</Avatar>
    </MenubarTrigger>
    <MenubarContent>
      <Link href={"/profile"} >
        <MenubarItem className={"cursor-pointer"} >
          <User2 className='h-4 w-4' /> My Profile 
        </MenubarItem>
      </Link>
      <Link href={"/appointments"}  >
        <MenubarItem  className={"cursor-pointer"} >
          <Calendar className='h-4 w-4' />  Appointments 
        </MenubarItem>
      </Link>
      <Link href={"/logout"}  >
        <MenubarItem className={"cursor-pointer"} >
          <LogOutIcon className='h-4 w-4' /> Log Out 
        </MenubarItem>
      </Link>
      
    </MenubarContent>
  </MenubarMenu>
</Menubar> : <Link href={"/login"} >
                <Button className='cursor-pointer' variant={"outline"} >
                  Login 
                </Button>
</Link> 
              }

            </div>
            </div>

        </div>
    </div>
  )
}

export default Header
