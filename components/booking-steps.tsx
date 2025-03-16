import { Check } from "lucide-react"

interface BookingStepsProps {
  currentStep: number
}

export default function BookingSteps({ currentStep }: BookingStepsProps) {
  const steps = [
    { id: 1, name: "Date & Time" },
    { id: 2, name: "Details" },
    { id: 3, name: "Payment" },
    { id: 4, name: "Confirmation" },
  ]

  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="absolute left-1/2 top-[26px] h-0.5 w-full -translate-x-1/2 -translate-y-1/2 bg-muted"></div>
      <ol className="relative z-10 flex justify-between">
        {steps.map((step) => (
          <li key={step.id} className="flex flex-col items-center">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-medium ${
                currentStep > step.id
                  ? "bg-green-500 text-white"
                  : currentStep === step.id
                    ? "bg-orange-500 text-white"
                    : "border-2 border-muted bg-background text-muted-foreground"
              }`}
            >
              {currentStep > step.id ? <Check className="h-6 w-6" /> : step.id}
            </div>
            <span
              className={`mt-2 text-center text-sm font-medium ${
                currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {step.name}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}

