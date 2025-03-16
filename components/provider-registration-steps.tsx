import { Check } from "lucide-react"

export default function ProviderRegistrationSteps() {
  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="absolute left-1/2 top-[26px] h-0.5 w-full -translate-x-1/2 -translate-y-1/2 bg-muted"></div>
      <ol className="relative z-10 flex justify-between">
        <li className="flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white">
            <Check className="h-6 w-6" />
          </div>
          <span className="mt-2 text-center text-sm font-medium">Personal Info</span>
        </li>
        <li className="flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-muted bg-background text-muted-foreground">
            2
          </div>
          <span className="mt-2 text-center text-sm font-medium text-muted-foreground">Verification</span>
        </li>
        <li className="flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-muted bg-background text-muted-foreground">
            3
          </div>
          <span className="mt-2 text-center text-sm font-medium text-muted-foreground">Approval</span>
        </li>
        <li className="flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-muted bg-background text-muted-foreground">
            4
          </div>
          <span className="mt-2 text-center text-sm font-medium text-muted-foreground">Complete</span>
        </li>
      </ol>
    </div>
  )
}

