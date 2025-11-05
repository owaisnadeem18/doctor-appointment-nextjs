"use client"

import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {

    const params = useParams()

  return (
    <div>
       doctor's id is {params.id} 
    </div>
  )
}

export default page
