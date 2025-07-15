import { cn } from "@/lib/utils"

interface IndexSectionProps {
  children: React.ReactNode
}

interface IndexLabelProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string
  className?: string
  marked: boolean
  disabled: boolean
}

export const IndexLabel = ({ title, className, marked = false, disabled, ...props }: IndexLabelProps) => {
  let extras = ""

  // All buttons in mobile
  if (disabled) {
    extras += "hidden"
  }

  // The marked button in any device
  if (marked) {
    extras += "border-white active:bg-none"
  }

  // Only the remaining button in mobile
  if (marked && disabled) {
    extras += "border-secondary sm:border-white"
  }

  return (
    <button
      className={cn(
        "bg-modal hover:bg-white/10 active:bg-white/10 border-2 w-full h-fit rounded-xl items-center",
        "justify-center shadow-md shadow-black/50 hover: cursor-pointer sm:flex border-secondary",
        `${extras}`,
        `${className}`
      )}
      {...props}
    >
      <div className="flex flex-col h-full justify-center py-1.5">
        <p className="px-3 text-md">{title}</p>
      </div>
    </button>
  )
}

export const IndexSection = ({ children }: IndexSectionProps) => {
  return (
    <section className="w-full space-y-5">
      <div className="space-y-3 flex flex-col items-center">{children}</div>
    </section>
  )
}
