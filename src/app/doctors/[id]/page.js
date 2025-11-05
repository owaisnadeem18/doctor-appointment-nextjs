"use client"

import SingleDoctorInfo from '@/components/SingleDoctorInfo'
import { doctors } from '@/lib/data'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {

    const params = useParams()

    const id = params.id

    const doctorInfo = doctors.find(doctor => doctor.id == id)

    console.log(doctorInfo)

  return (
    <div className="bg-gray-100 min-h-[calc(100vh-60px)]" >
        <SingleDoctorInfo data={doctorInfo} />
    </div>
  )
}

export default page
