"use client"

import React from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { doctorCategories, doctors } from '@/lib/data'
import Link from 'next/link'
import { Button } from './ui/Button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { femaleDoctorAvatar } from '@/assets'
import { maleDoctorAvatar } from '@/assets'
import { ArrowRight, Clock, Hospital, HospitalIcon, PlusIcon, TimerIcon } from 'lucide-react'

const DoctorsCategory = ({ isHome }) => {

    const filteredDoctors = isHome ? doctors.slice(0, 6) : doctors

    return (
        <div className='p-3 min-h-[calc(100vh-60px)]' >
            <div className='container mx-auto' >

                <div className='flex items-center justify-between gap-2' >

                    <h2 className='md:text-2xl text-xl font-semibold' >
                        Premium Doctors
                    </h2>



                    <div>
                        {

                            isHome ? <Link href={"/doctors"} >
                                <Button variant={"outline"} className={"cursor-pointer"} >
                                    See All     <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link> :
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Doctor Categories" />
                                    </SelectTrigger>
                                    <SelectContent>

                                        {
                                            doctorCategories.map(category => <SelectItem key={category} value={category} >{category}</SelectItem>)
                                        }

                                    </SelectContent>
                                </Select>
                        }
                    </div>

                </div>

                <div className='my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' >

                    {
                        filteredDoctors.map(doctor => <Card key={doctor?.id} >

                            <CardHeader>
                                <div className='flex justify-start items-center' >
                                        <Avatar>

                                        <AvatarImage src= {doctor?.gender.toLowerCase() == "male" ? maleDoctorAvatar.src : femaleDoctorAvatar.src} />

                                        <AvatarFallback>{doctor?.name}</AvatarFallback>

                                    </Avatar>
                                    

                                </div>
                                <CardDescription className={"text-muted-foreground flex justify-between"} >
 </CardDescription>
                                <CardTitle className={"leading-6"} >                                     <Badge className="badge-text-wrap" >

                                        {doctor?.category}
                                    </Badge> </CardTitle>

                                <CardAction className={"text-accent-foreground font-medium"} >
                                    {doctor?.name}
                                </CardAction>
                            </CardHeader>

<CardContent className="flex flex-col gap-2 border-y border-gray-400/50 border-dashed rounded-sm ">
  <div className="flex justify-between items-center gap-3 border-b border-gray-300/60 border-dashed mt-2">
    <div className='flex gap-1 items-center' > <Clock className='h-4 w-4' /> Time</div>
    <div>{doctor?.appointmentTime}</div>
  </div>
  <div className="flex justify-between items-center gap-3 border-b border-gray-300/60 border-dashed">
    <div className='flex gap-1 items-center'> <PlusIcon className='h-4 w-4' /> Gender</div>
    <div>{doctor?.gender[0].toUpperCase() + doctor?.gender.slice(1)}</div>
  </div>
  <div className="flex justify-between items-center gap-3 mb-2">
    <div className='flex gap-1 items-center'  > <Hospital className='h-4 w-4' /> Hospital</div>
    <div className="bg-gray-50 py-3 px-4 w-[60%] rounded-2xl text-sm font-semibold text-right">
      {doctor?.hospital}
    </div>
  </div>
</CardContent>


                            {
                                !isHome &&
                            <CardFooter>
                                <Link href={`/doctors/${doctor?.id}`} >
                                    <Button className={"cursor-pointer"} >
                                        See Details
                                    </Button>
                                </Link>
                            </CardFooter>
                            }

                        </Card>)
                    }

                </div>

            </div>
        </div>
    )
}

export default DoctorsCategory
