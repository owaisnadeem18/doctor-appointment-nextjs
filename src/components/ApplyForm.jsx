"use client"

import { z } from "zod"
import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "./ui/input"
import { Button } from "./ui/Button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "./ui/textarea"

export const applicationSchema = z.object({

    // 👤 Personal Info
    name: z.string().min(2, "Name must be at least 2 characters").max(50),
    email: z.string().email("Invalid email address"),
    phone: z
        .string()
        .regex(/^[0-9]{10,15}$/, "Phone number must be 10–15 digits"),
    gender: z.enum(["male", "female", "other"]),
    age: z.number().min(22, "Minimum age is 22").max(80, "Maximum age is 80"),

    // 🩺 Professional Info
    specialization: z
        .string()
        .min(3, "Specialization must be at least 3 characters"),
    qualification: z
        .string()
        .min(3, "Qualification must be at least 3 characters"),
    experienceYears: z
        .number()
        .min(0, "Experience cannot be negative")
        .max(60, "Please enter a valid number of years"),

    // 🏥 Additional Info
    clinicName: z.string().optional(),
    city: z.string().min(2, "City name must be at least 2 characters"),
    address: z.string().min(5, "Address must be at least 5 characters"),
    fee: z.number().min(0, "Fee cannot be negative"),
    degree: z.string().min(2, "Degree must be at least 2 characters").max(50, "Degree must be less than 50 characters"),
    bio: z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio cannot exceed 500 characters"),

    // profileImage: z.string().url("A valid profile image URL is required").min(1, "Profile image is required"),
    profileImage: z.any(),

    // 🕓 Availability
    availableDays: z
        .array(z.enum(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]))
        .min(1, "Select at least one available day"),
    availableTime: z
        .object({
            start: z.string(), // e.g. "09:00"
            end: z.string(),   // e.g. "17:00"
        })
        .refine((t) => t.start < t.end, {
            message: "Start time must be before end time",
        }),
})

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const ApplyForm = () => {
    const form = useForm({
        resolver: zodResolver(applicationSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            gender: "",
            age: "",
            specialization: "",
            qualification: "",
            experienceYears: "",
            clinicName: "",
            city: "",
            address: "",
            fee: "",
            degree: "",
            availableDays: [],
            availableTime: { start: "", end: "" },
            profileImage: "",
            certificateUrl: "",
        },
    })

    const onSubmit = (values) => {
        console.log("Doctor Application Data:", values)
    }

    const [preview, setPreview] = React.useState(null)

    return (
        <div className="container mx-auto py-6" >
            <Form {...form} >
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6 bg-white p-6 rounded-2xl shadow"
                >

                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4" >


                        {/* Name */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Dr. John Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Email */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="doctor@email.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Phone */}
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="+92 300 0000000" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Clinic Info */}
                        <FormField
                            control={form.control}
                            name="experienceYears"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Experience</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Experience (In Years)" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Karachi" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Specialization */}
                        <FormField
                            control={form.control}
                            name="specialization"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Specialization</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Cardiologist, Dentist, etc." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />




                        {/* Gender */}
                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel>Gender</FormLabel>
                                    <FormControl >
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className={"w-full"} >
                                                <SelectValue placeholder="Select Gender" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="male">Male</SelectItem>
                                                <SelectItem value="female">Female</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        {/* Fee */}
                        <FormField
                            control={form.control}
                            name="fee"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Consultation Fee</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="e.g. 1500 Rs" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="degree"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Degree</FormLabel>
                                    <FormControl>
                                        <Input placeholder="MBBS e.t.c" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Bio */}
                    <FormField
                        control={form.control}
                        name="bio"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Bio</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Write a short bio about yourself..."
                                        className="resize-none min-h-[100px] w-full"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Available Days */}
                    <FormField
                        control={form.control}
                        name="availableDays"
                        render={() => (
                            <FormItem>
                                <FormLabel>Available Days</FormLabel>
                                <div className="flex flex-wrap gap-3">
                                    {days.map((day) => (
                                        <label key={day} className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={form.watch("availableDays")?.includes(day)}
                                                onCheckedChange={(checked) => {
                                                    const value = form.watch("availableDays") || []
                                                    form.setValue(
                                                        "availableDays",
                                                        checked
                                                            ? [...value, day]
                                                            : value.filter((d) => d !== day)
                                                    )
                                                }}
                                            />
                                            <span>{day}</span>
                                        </label>
                                    ))}
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Profile Picture Upload */}

                    <FormField
                        control={form.control}
                        name="profileImage"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Profile Picture</FormLabel>
                                <FormControl className="w-fit" >
                                    <div className="space-y-3">
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0]
                                                if (file) {
                                                    const imageUrl = URL.createObjectURL(file)
                                                    setPreview(imageUrl)
                                                    field.onChange(file)
                                                }
                                            }}
                                        />

                                        {/* 👇 Just a frontend preview */}
                                        {preview && (
                                            <div className="w-24 h-24 rounded-full overflow-hidden border">
                                                <img
                                                    src={preview}
                                                    alt="Profile preview"
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />



                    <Button type="submit" className="md:w-fit w-full">
                        Submit Application
                    </Button>
                </form>
            </Form>
        </div>

    )
}

export default ApplyForm
