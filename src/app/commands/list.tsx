"use client"

import { IndexLabel, IndexSection } from "@/components"
import { CommandDetails, CommandSection } from "@/components/commands"
import { cn } from "@/lib/utils"
import { Fragment, useState } from "react"

const IndexIcons = {
  Closed: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
      />
    </svg>
  ),
  Open: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
      />
    </svg>
  ),
}

export const CommandPage = () => {
  const [buttonState, setButtonState] = useState(-1)
  const [menuState, setMenuState] = useState(false)

  const all_commands = sections.map((section, index) => <Fragment key={index}>{section.element}</Fragment>)
  const all_labels = sections.map((section, index) => (
    <IndexLabel
      marked={buttonState == index}
      key={index}
      title={section.title}
      onClick={() => setButtonState(index)}
      disabled={!menuState}
    />
  ))

  return (
    <>
      <div className="w-60 sm:w-50 max-w-[90%] flex space-x-2 relative">
        {
          <IndexSection>
            <IndexLabel
              marked={buttonState < 0}
              title="Todos"
              onClick={() => setButtonState(-1)}
              disabled={!menuState}
            />
            {all_labels}
          </IndexSection>
        }
        <button
          onClick={() => setMenuState(!menuState)}
          className={cn(
            "hover:border-b-2 border-2 border-secondary rounded-xl flex justify-center items-center font-semibold",
            "max-w-10 w-full max-h-10 h-full",
            "text-lesswhite hover:text-white active:bg-white/10 bg-modal shadow-md shadow-black/50",
            "sm:hidden"
          )}
        >
          {menuState ? IndexIcons.Open : IndexIcons.Closed}
        </button>
      </div>

      <div className="w-170 max-w-full space-y-15">
        <CommandSection>{buttonState < 0 ? all_commands : sections[buttonState].element}</CommandSection>
      </div>
    </>
  )
}

const sections = [
  {
    title: "Gerais",
    element: (
      <>
        <CommandDetails title="/code" info="Execute código em diversas linguagens de programação populares." />
        <CommandDetails title="/raffle" info="Realiza um sorteio simples." />
        <CommandDetails title="/dice" info="Lança um ou mais dados personalizáveis." />
        <CommandDetails title="/say" info="Faz o bot falar alguma bobagem." />
        <CommandDetails title="/ping" info="Verifica o tempo de atraso das respostas do bot." />
      </>
    ),
  },
  {
    title: "Binds",
    element: (
      <>
        <CommandDetails title="/bind register" info="Cria uma bind com um determinado nome." />
        <CommandDetails title="/bind say" info="Imprime uma determinada bind no chat." />
        <CommandDetails title="/bind modify" info="Altera o texto de uma bind criada por você." />
        <CommandDetails title="/bind delete" info="Deleta uma bind criada por você." />
        <CommandDetails title="/bind info" info="Exibe informações úteis sobre uma bind." />
        <CommandDetails title="/bind list-mine" info="Exibe uma lista das binds criadas por você." />
      </>
    ),
  },
  {
    title: "Imagens",
    element: (
      <>
        <CommandDetails title="/image find-anime" info="Descubra o nome de um anime usando um frame dele." />
        <CommandDetails title="/image make-gif" info="Transforma uma imagem em um GIF estático." />
      </>
    ),
  },
  {
    title: "Steam",
    element: (
      <>
        <CommandDetails title="/steam user" info="Exibe informações sobre algum usuário Steam." />
        <CommandDetails title="/steam workshop" info="Exibe informações sobre um item da Oficina Steam." />
      </>
    ),
  },
  {
    title: "Desenvolvedor",
    element: (
      <>
        <CommandDetails title="./info" info="Imprime algumas informações sobre o host." />
        <CommandDetails title="./shutdown" info="Interrompe a execução do bot." />
        <CommandDetails title="./guildperms" info="Imprime as permissões do bot na guilda." />
        <CommandDetails title="./channelperms" info="Imprime as permissões do bot no canal." />
        <CommandDetails title="./delmsg" info="Deleta uma mensagem enviada pelo bot." />
      </>
    ),
  },
]
