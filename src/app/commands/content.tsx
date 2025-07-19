"use client"

import { CommandCategories } from "@/components/commands/Categories"
import { CategoryIcons } from "@/components/commands/CategoryIcons"
import { CommandSection } from "@/components/commands/Section"
import { ModalButton } from "@/components/ModalButton"
import { Fragment, useState } from "react"
import { commandList } from "./list"

export const CommandPage = () => {
  const [selectedButtonId, setSelectedButton] = useState(-1)
  const [isMenuExpanded, setMenuExpanded] = useState(false)

  const all_commands = commandList.map((section, index) => (
    <Fragment key={index}>{section.element}</Fragment>
  ))
  const all_labels = commandList.map((section, index) => (
    <CommandCategories
      isSelected={selectedButtonId == index}
      key={index}
      label={section.title}
      onClick={() => setSelectedButton(index)}
      isMenuExpanded={isMenuExpanded}
    />
  ))

  return (
    <>
      <div className="w-60 sm:w-50 max-w-[90%] flex space-x-2 relative">
        <CommandSection>
          <CommandCategories
            isSelected={selectedButtonId < 0}
            label="Todos"
            onClick={() => setSelectedButton(-1)}
            isMenuExpanded={isMenuExpanded}
          />
          {all_labels}
        </CommandSection>

        <ModalButton
          className="flex w-11 h-11 shrink-0 px-0 py-0 sm:hidden"
          onClick={() => setMenuExpanded(!isMenuExpanded)}
        >
          {isMenuExpanded ? CategoryIcons.Collapse : CategoryIcons.Expand}
        </ModalButton>
      </div>

      <div className="w-170 max-w-full space-y-15">
        <CommandSection>
          {selectedButtonId < 0 ? all_commands : commandList[selectedButtonId].element}
        </CommandSection>
      </div>
    </>
  )
}
