import { cn } from "@/lib/utils"
import { CommandPage } from "./content"

export const metadata = {
  title: "Comandos",
}

export default function Commands() {
  return (
    <main className="flex justify-center">
      <div
        className={cn(
          "py-[15%] flex flex-col items-center space-y-10 max-w-[90%] min-h-[calc(100vh-60px)]",
          "sm:py-[5%] sm:flex-row sm:space-x-6 sm:flex sm:items-start"
        )}
      >
        <CommandPage />
      </div>
    </main>
  )
}
