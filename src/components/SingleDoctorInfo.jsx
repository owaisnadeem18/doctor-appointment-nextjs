"use client";
import Image from "next/image";
import { femaleDoctorAvatar, maleDoctorAvatar } from "@/assets";
import { CalendarClock, MapPin, User2, Star } from "lucide-react";
import { Button } from "./ui/Button";

export default function SingleDoctorInfo({ data }) {
  return (
    <div className="container mx-auto py-12 2xl:px-0 lg:px-12 sm:px-6 px-3">
      <section className="text-gray-700 body-font">
        <div className="flex flex-col md:flex-row items-center lg:items-start gap-10">
          {/* Doctor Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src={
                data?.gender?.toLowerCase() === "male"
                  ? maleDoctorAvatar
                  : femaleDoctorAvatar
              }
              alt="Doctor"
              className="rounded-2xl object-cover shadow-md w-full"
            />
          </div>

          {/* Doctor Info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">
                Dr. {data?.name}
              </h1>
              <p className="text-blue-600 font-medium mt-1">
                {data?.category}
              </p>
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
                <span className="bg-gray-100 py-2 rounded-xl text-sm font-semibold text-gray-900 text-right">
                  {data?.hospital}
                </span>
              </div>
            </div>

            {/* Fee & Action */}
            <div className="flex items-center justify-between  gap-3">
              <span className="text-2xl font-bold text-gray-900">
                Fee: Rs. {data?.fee}
              </span>
              <Button className=" transition">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
