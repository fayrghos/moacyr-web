import { cn } from "@/lib/utils"
import Link from "next/link"

interface MainButtonProps {
  label: string
  href: string
  colorBg?: string
  colorGrad?: string
}

export const HomeButton = ({ label, href, colorBg = "bg-modal", colorGrad = undefined }: MainButtonProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "w-70 flex justify-center items-center h-12 rounded-xl font-semibold",
        "bg-linear-to-t text-shadow-md",
        colorBg,
        colorGrad,
        "transition hover:scale-105 ease-out transition-discrete"
      )}
    >
      {label}
    </Link>
  )
}
