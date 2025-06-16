import { MainButton } from "@/components/mainbuttons"
import { INVITE_URL, REPOSITORY_URL } from "@/constants"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <div className="-z-10 h-[75%] absolute w-full top-0 bg-gradient-to-t to-gray-900/75" />

      <div className="max-w-[90%] flex flex-col min-h-[calc(100vh-60px)] py-20 justify-center">
        <section className="flex flex-col space-y-15 items-center max-w-200 justify-center">
          <div className="flex w-[95%] items-center text-2xl sm:text-3xl">
            <p>
              <span className="font-semibold">Moacyr</span> é um bot multipropósito, livre e de código aberto em
              estágio inicial de desenvolvimento para utilização em servidores de Discord.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center max-w-full">
            <MainButton
              label="ADICIONAR AO DISCORD"
              href={INVITE_URL}
              newTab={true}
              colorBg="bg-[#4c56c5]"
              colorGrad="hover:from-indigo-700"
            />

            <p className="text-lg">ou</p>

            <MainButton
              label="HOSPEDE VOCÊ MESMO"
              href={REPOSITORY_URL}
              newTab={true}
              colorBg="bg-gray-600"
              colorGrad="hover:from-gray-700"
            />
          </div>

          <div
            className={cn(
              "bg-modal border-2 border-secondary rounded-xl items-center",
              "justify-center shadow-md shadow-black/50 sm:w-[50%] w-[85%] p-3 flex flex-col opacity-80"
            )}
          >
            <p className="text-md text-center text-lesswhite">
              O código-fonte é escrito na linguagem Python 3 e está disponível sob a licença AGPLv3.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
