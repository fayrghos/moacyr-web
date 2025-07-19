interface CommandSectionProps {
  children: React.ReactNode
}

export const CommandSection = ({ children }: CommandSectionProps) => {
  return (
    <section className="w-full">
      <div className="space-y-3 flex flex-col items-center">{children}</div>
    </section>
  )
}
