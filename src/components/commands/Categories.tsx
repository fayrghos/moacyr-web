import { cn } from "@/lib/utils"

interface CommandCategoriesProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string
  className?: string
  marked: boolean
  disabled: boolean
}

export const CommandCategories = ({
  title,
  className,
  marked = false,
  disabled,
  ...props
}: CommandCategoriesProps) => {
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
