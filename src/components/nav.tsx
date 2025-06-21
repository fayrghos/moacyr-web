"use client"

import { INVITE_URL, REPOSITORY_URL } from "@/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"

interface HeadButtonProps {
  label: string
  href: string
  newTab?: boolean
  disabled?: boolean
}

const HeadButton = ({ label, href, newTab = false, disabled = false }: HeadButtonProps) => {
  return (
    <Link
      href={href}
      target={newTab ? "_blank" : undefined}
      className={cn(
        "hover:border-b-2 px-3 flex justify-center items-center min-h-12 sm:min-h-10 font-semibold",
        "text-lesswhite hover:text-white w-full max-w-70",
        "active:bg-white/10 sm:active:bg-transparent rounded-xl sm:rounded-none",
        disabled ? "pointer-events-none opacity-50 line-through" : undefined
      )}
    >
      {label}
    </Link>
  )
}

const NavButtons = (
  <>
    <HeadButton label="COMANDOS" href="/commands" />
    <HeadButton label="CONVIDAR" href={INVITE_URL} newTab={true} />
    <HeadButton label="GITHUB" href={REPOSITORY_URL} newTab={true} />
  </>
)

const HamIcons = {
  Ham: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  ),
  Cross: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  ),
}

export const Nav = () => {
  const [hamOpen, setHamOpen] = useState(false)

  return (
    <header className="sticky top-0 overflow-hidden z-50 bg-black/60 backdrop-blur-md border-b-2 border-secondary flex flex-col items-center justify-center">
      <nav className="flex justify-between items-center min-h-[60px] sm:min-h-[55px] w-200 max-w-[90%]">
        <Link
          href={"/"}
          className={cn(
            "flex justify-center items-center h-10 text-2xl font-bold font-sans rounded-xl",
            "active:bg-white/10 hover:bg-white/10",
            "px-2 sm:mx-0 -mx-2"
          )}
        >
          Moacyr
        </Link>
        <div className="hidden sm:flex">{NavButtons}</div>

        <button
          onClick={() => setHamOpen(!hamOpen)}
          className={cn(
            "hover:border-b-2 w-10 border-2 border-secondary rounded-xl flex justify-center items-center h-10 font-semibold",
            "text-lesswhite hover:text-white active:bg-white/10",
            "sm:hidden"
          )}
        >
          {hamOpen ? HamIcons.Cross : HamIcons.Ham}
        </button>
      </nav>

      <noscript>
        <p className="sm:hidden text-red-400 mb-2 ">Ative o JavaScript para usar o menu!</p>
      </noscript>

      {hamOpen && (
        <nav
          className={cn(
            "w-[90%] overflow-y-auto sm:hidden py-2 border-t-2 border-secondary",
            "flex max-h-[275px] flex-col items-center"
          )}
        >
          {NavButtons}
        </nav>
      )}
    </header>
  )
}
