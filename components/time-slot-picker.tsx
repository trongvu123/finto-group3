"use client"

interface TimeSlotPickerProps {
  selectedTime: string | null
  onSelectTime: (time: string) => void
}

export default function TimeSlotPicker({ selectedTime, onSelectTime }: TimeSlotPickerProps) {
  const morningSlots = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"]

  const afternoonSlots = ["1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"]

  return (
    <div className="mt-4 space-y-4">
      <div>
        <h4 className="mb-2 text-sm font-medium text-muted-foreground">Morning</h4>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
          {morningSlots.map((time) => (
            <div
              key={time}
              className={`cursor-pointer rounded-md border p-2 text-center text-sm transition-colors hover:border-orange-500 hover:bg-orange-50 ${
                selectedTime === time ? "border-orange-500 bg-orange-50" : ""
              }`}
              onClick={() => onSelectTime(time)}
            >
              {time}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-sm font-medium text-muted-foreground">Afternoon</h4>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
          {afternoonSlots.map((time) => (
            <div
              key={time}
              className={`cursor-pointer rounded-md border p-2 text-center text-sm transition-colors hover:border-orange-500 hover:bg-orange-50 ${
                selectedTime === time ? "border-orange-500 bg-orange-50" : ""
              }`}
              onClick={() => onSelectTime(time)}
            >
              {time}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

