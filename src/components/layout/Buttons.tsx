import { cn } from "@/lib/utils"
import Link from "next/link"

interface HeaderButtonProps {
  label: string
  href: string
  newTab?: boolean
  disabled?: boolean
}

export const HeaderButton = ({ label, href, newTab = false, disabled = false }: HeaderButtonProps) => {
  return (
    <Link
      href={href}
      target={newTab ? "_blank" : undefined}
      className={cn(
        "sm:hover:border-b-2 px-3 flex justify-center items-center min-h-12 sm:min-h-10 font-semibold",
        "text-lesswhite hover:text-white w-full max-w-70",
        "active:bg-white/10 sm:active:bg-transparent rounded-xl sm:rounded-none",
        disabled ? "pointer-events-none opacity-50 line-through" : undefined
      )}
    >
      {label}
    </Link>
  )
}
