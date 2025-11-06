"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./ui/Button"
import { Calendar } from "./ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover"

export default function AppointmentPicker() {
  const [date, setDate] = React.useState(new Date())
  const [popUpOpen , setPopUpOpen] = React.useState(false)

  return (
    <div className="flex flex-col items-start space-y-4">
      <Popover open={popUpOpen} onOpenChange={setPopUpOpen} >
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick Appointment Date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(selectedDate) => {
              setDate(selectedDate)
              setPopUpOpen(false)
            } }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
