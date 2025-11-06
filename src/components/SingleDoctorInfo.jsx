"use client";
import Image from "next/image";
import { femaleDoctorAvatar, maleDoctorAvatar } from "@/assets";
import { CalendarClock, MapPin, User2, Star, CircleDollarSign } from "lucide-react";
import { Button } from "./ui/Button";
import { Badge } from "./ui/badge";
import AppointmentPicker from "./AppointmentPicker";

export default function SingleDoctorInfo({ data }) {
  return (
    <div className="container mx-auto sm:py-12 py-7 px-3">
      <section className="text-gray-700 body-font">
        <div className="flex flex-col sm:flex-row items-center  gap-10 ">
          {/* Doctor Image */}
          <div >
            <Image
              src={
                data?.gender?.toLowerCase() === "male"
                  ? maleDoctorAvatar
                  : femaleDoctorAvatar
              }
              alt="Doctor"
              className="rounded-2xl object-cover shadow-md lg:h-[500px] lg:w-[500px]"
            />
          </div>

          {/* Doctor Info */}
          <div className="w-full lg:w-1/3 flex flex-col gap-5">
            <div className="flex gap-3 items-center" >
              <h1 className="text-3xl font-semibold text-gray-900">
                {data?.name}
              </h1>
              
              <Badge >
                {data?.category}
              </Badge>
            </div>

            {/* Ratings */}
            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-500" />
              ))}
              <span className="text-gray-600 ml-2 text-sm">(4.9 / 5)</span>
            </div>

            {/* Info Section */}
            <div className="flex flex-col gap-4 border-y py-4 text-sm">
              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <CalendarClock size={18} />
                  Appointment Time
                </div>
                <span className="font-semibold text-gray-900">
                  {data?.appointmentTime}
                </span>
              </div>

              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <User2 size={18} />
                  Gender
                </div>
                <span className="font-semibold text-gray-900">
                  {data?.gender
                    ? data.gender[0].toUpperCase() + data.gender.slice(1)
                    : "N/A"}
                </span>
              </div>

              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={18} />
                  Hospital
                </div>
                <span className="bg-gray-100 rounded-xl text-sm font-semibold text-gray-900 text-right">
                  {data?.hospital}
                </span>
              </div>
              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <CircleDollarSign size={18} />
                  Fee
                </div>
                <span className="bg-gray-100 rounded-xl text-sm font-semibold text-gray-900 text-right">
                  {data?.fee} Rs
                </span>
              </div>
            </div>

            {/* Fee & Action */}
              <div className="flex flex-col gap-2" >

              <h2>
                Pick Your Appointment Today
              </h2>
              <AppointmentPicker/>
              </div>
              <Button className=" transition w-full cursor-pointer">
                Book Appointment
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
