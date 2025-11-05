import Image from 'next/image'
import React from 'react'
import { heroSectionImage } from '@/assets'
import { Button } from './ui/Button'
import { CalendarPlus, Stethoscope } from 'lucide-react'

const HeroSection = () => {


  return (
    <section className="text-gray-600 body-font min-h-[calc(100vh-60px)]">
      <div className="container mx-auto flex py-24 md:flex-row flex-col gap-12 items-center min-h-[calc(100vh-60px)]">
        {/* Left Text Section */}
        <div className="w-[50%] flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="xl:text-5xl leading-16 text-3xl mb-4 font-bold text-gray-900">
            Smarter Appointments,

            Healthier Lives
          </h1>
          <p className="mb-8 leading-relaxed text-gray-700 lg:text-xl sm:text-lg text-sm">
            From scheduling to patient notes, our smart tools handle the busywork so you can focus on better care and real connections.
          </p>

          <div className="flex justify-center gap-5">

            <Button className="cursor-pointer">
              <CalendarPlus />
              Find Doctors
            </Button>
            <Button
              variant={"outline"}
              className="cursor-pointer"
            >
              <Stethoscope />
              Apply As Doctor
            </Button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="">
          <Image
            className="object-cover object-center rounded-xl "
            alt="Doctor Dashboard"
            src={heroSectionImage}
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
