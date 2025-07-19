import { cn } from "@/lib/utils"
import { ModalButton } from "../ModalButton"

interface CommandCategoriesProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string
  className?: string
  isSelected: boolean
  isMenuExpanded: boolean
}

export const CommandCategories = ({
  label,
  className,
  isSelected,
  isMenuExpanded,
  ...props
}: CommandCategoriesProps) => {
  return (
    <>
      {/* Desktop */}
      <ModalButton
        className={cn("hidden sm:flex", isSelected ? "border-white" : undefined, className)}
        {...props}
      >
        {label}
      </ModalButton>

      {/* Mobile */}
      <ModalButton
        className={cn(
          "flex sm:hidden",
          !isSelected && !isMenuExpanded ? "hidden" : undefined,
          isSelected && isMenuExpanded ? "border-white" : undefined,
          isSelected && !isMenuExpanded ? "pointer-events-none" : undefined,
          className
        )}
        {...props}
      >
        {label}
      </ModalButton>
    </>
  )
}
