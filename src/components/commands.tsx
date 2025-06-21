import { cn } from "@/lib/utils"

interface CommandSectionProps {
  title: string
  children: React.ReactNode
}

interface CommandInfoProps {
  title: string
  info: string
}

export const CommandSection = ({ title, children }: CommandSectionProps) => {
  return (
    <section className="w-full space-y-5">
      <p className="text-2xl font-bold flex justify-center">{title}</p>

      <div className="space-y-3 flex flex-col items-center">{children}</div>
    </section>
  )
}

export const CommandInfo = ({ title, info }: CommandInfoProps) => {
  return (
    <div
      className={cn(
        "bg-modal border-2 border-secondary w-full h-fit rounded-xl items-center",
        "justify-center shadow-md shadow-black/50 max-w-[90%]"
      )}
    >
      <div className="flex flex-col h-full justify-center py-2">
        <p className="px-5 text-xl">{title}</p>
        <p className="px-5 text-md text-modal-desc">{info}</p>
      </div>
    </div>
  )
}
