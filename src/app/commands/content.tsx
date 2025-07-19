"use client"

import { CommandCategories } from "@/components/commands/Categories"
import { CategoryIcons } from "@/components/commands/CategoryIcons"
import { CommandSection } from "@/components/commands/Section"
import { Modal } from "@/components/Modal"
import { Fragment, useState } from "react"
import { commandList } from "./list"

export const CommandPage = () => {
  const [selectedButtonId, setSelectedButton] = useState(-1)
  const [isMenuOpen, setMenuState] = useState(false)

  const all_commands = commandList.map((section, index) => <Fragment key={index}>{section.element}</Fragment>)
  const all_labels = commandList.map((section, index) => (
    <CommandCategories
      marked={selectedButtonId == index}
      key={index}
      title={section.title}
      onClick={() => setSelectedButton(index)}
      disabled={!isMenuOpen}
    />
  ))

  return (
    <>
      <div className="w-60 sm:w-50 max-w-[90%] flex space-x-2 relative">
        <CommandSection>
          <CommandCategories
            marked={selectedButtonId < 0}
            title="Todos"
            onClick={() => setSelectedButton(-1)}
            disabled={!isMenuOpen}
          />
          {all_labels}
        </CommandSection>

        <Modal className="flex w-10 h-10 shrink-0 px-0 py-0 sm:hidden">
          <button onClick={() => setMenuState(!isMenuOpen)}>
            {isMenuOpen ? CategoryIcons.Collapse : CategoryIcons.Expand}
          </button>
        </Modal>
      </div>

      <div className="w-170 max-w-full space-y-15">
        <CommandSection>
          {selectedButtonId < 0 ? all_commands : commandList[selectedButtonId].element}
        </CommandSection>
      </div>
    </>
  )
}
