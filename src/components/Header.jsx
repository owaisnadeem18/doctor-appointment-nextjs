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

const Header = () => {
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

            <Menubar>
  <MenubarMenu>
    <MenubarTrigger>
        <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
    </MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        Show Profile 
      </MenubarItem>
      <MenubarItem>
        Log Out 
      </MenubarItem>
      
    </MenubarContent>
  </MenubarMenu>
</Menubar>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Header
