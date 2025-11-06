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

const Header = () => {
  
  let session = null
  
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
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
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
