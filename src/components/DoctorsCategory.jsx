import React from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { doctorCategories } from '@/lib/data'

const DoctorsCategory = () => {
  return (
    <div className='bg-gray-50 p-3' >
        <div className='container mx-auto' >

        <div className='flex items-center justify-between' >

        <h2 className='text-2xl' >
            Premium Doctors 
        </h2>

        <div>
  <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Doctor Categories" />
  </SelectTrigger>
  <SelectContent>
    
    {
        doctorCategories.map(category => <SelectItem key={category} value= {category} >{category}</SelectItem> )
    }
    
  </SelectContent>
</Select>
        </div>

        </div>

        </div>
    </div>
  )
}

export default DoctorsCategory
