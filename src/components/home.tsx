import { cn } from "@/lib/utils"
import Link from "next/link"

interface MainButtonProps {
  label: string
  href: string
  newTab?: boolean
  colorBg?: string
  colorGrad?: string
  disabled?: boolean
}

export const MainButton = ({
  label,
  href,
  newTab = false,
  colorBg = "bg-modal",
  colorGrad = undefined,
  disabled = false,
}: MainButtonProps) => {
  return (
    <Link
      href={href}
      target={newTab ? "_blank" : undefined}
      title={disabled ? "Em Breve!" : undefined}
      className={cn(
        "w-70 flex justify-center items-center h-12 rounded-xl font-semibold",
        "bg-linear-to-t text-shadow-md",
        disabled ? "pointer-events-none opacity-50 line-through" : undefined,
        colorBg,
        colorGrad,
        "transition hover:scale-105 ease-out transition-discrete"
      )}
    >
      {label}
    </Link>
  )
}
