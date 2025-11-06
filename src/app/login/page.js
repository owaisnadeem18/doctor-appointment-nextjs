import { Button } from '@/components/ui/Button'
import React from 'react'
import { github, googleIcon } from '@/assets'
import Image from 'next/image'

const page = () => {
  return (
      <div className='md:min-h-[calc(100vh-60px)] py-5 sm:py-0 flex items-center justify-center' >
      
      <div className='flex flex-col gap-2' >
        <Button variant={"outline"} className={"cursor-pointer"} >

            <Image alt='google' src={googleIcon} className='w-6 h-6 bg-transparent' /> Continue With Google 
        
        </Button>
        <Button variant={"outline"} className={"cursor-pointer"} >

            <Image alt='github' src={github} className='w-4 h-4 bg-transparent' /> Continue With GitHub 
        
        </Button>
      </div>
    </div>
  )
}

export default page
