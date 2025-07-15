import { cn } from "@/lib/utils"

interface CommandSectionProps {
  children: React.ReactNode
}

interface CommandInfoProps {
  title: string
  info: string
}

export const CommandSection = ({ children, ...props }: CommandSectionProps) => {
  return (
    <section className="w-full" {...props}>
      <div className="space-y-3 flex flex-col items-center">{children}</div>
    </section>
  )
}

export const CommandDetails = ({ title, info }: CommandInfoProps) => {
  return (
    <div
      className={cn(
        "bg-modal w-full border-2 border-secondary rounded-xl items-center",
        "justify-center shadow-md shadow-black/50"
      )}
    >
      <div className="flex flex-col h-full justify-center py-2">
        <p className="text-lg px-5">{title}</p>
        <p className="text-modal-desc px-5">{info}</p>
      </div>
    </div>
  )
}
