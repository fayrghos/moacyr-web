import { cn } from "@/lib/utils"

interface ModalProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  className?: string
}

export const ModalButton = ({ children, className, ...props }: ModalProps) => {
  return (
    <button
      className={cn(
        "w-full items-center justify-center py-2 px-3",
        "bg-modal border-secondary border-2 rounded-xl",
        "hover:bg-white/10 active:bg-white/10 hover:cursor-pointer",
        "shadow-md shadow-black/50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
