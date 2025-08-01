"use client"

import { INVITE_URL, REPOSITORY_URL } from "@/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"
import { ModalButton } from "../ModalButton"
import { HeaderButton } from "./Buttons"
import { HamIcons } from "./HamIcons"

const NavButtons = (
  <>
    <HeaderButton label="COMANDOS" href="/commands" />
    <HeaderButton label="CONVIDAR" href={INVITE_URL} newTab={true} />
    <HeaderButton label="GITHUB" href={REPOSITORY_URL} newTab={true} />
  </>
)

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

        <ModalButton
          onClick={() => setHamOpen(!hamOpen)}
          className="flex w-10 h-10 px-0 py-0 sm:hidden text-lesswhite bg-transparent"
        >
          {hamOpen ? HamIcons.Cross : HamIcons.Ham}
        </ModalButton>
      </nav>

      <noscript>
        <p className="sm:hidden text-red-400 mb-2 ">Ative o JavaScript para usar os menus!</p>
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
