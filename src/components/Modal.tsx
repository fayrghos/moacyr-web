import { cn } from "@/lib/utils"

interface ModalProps {
  children?: React.ReactNode
  className?: string
}

export const Modal = ({ children, className, ...props }: ModalProps) => {
  return (
    <div
      className={cn(
        "bg-modal border-2 border-secondary rounded-xl py-2 px-3",
        "shadow-md shadow-black/50",
        "w-full items-center justify-center",
        className
      )}
      {...props}
    >
      {/* <div className="flex flex-col h-full justify-center  items-center"></div> */}
      {children}
    </div>
  )
}
