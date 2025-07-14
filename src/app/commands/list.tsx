"use client"

import { IndexLabel, IndexSection } from "@/components"
import { CommandDetails, CommandSection } from "@/components/commands"
import { Fragment, useState } from "react"

export const CommandPage = () => {
  const [state, setState] = useState(-1)

  const all_commands = sections.map((section, index) => <Fragment key={index}>{section.element}</Fragment>)
  const index_labels = sections.map((section, index) => (
    <IndexLabel active={state == index} key={index} title={section.title} onClick={() => setState(index)} />
  ))

  return (
    <>
      <div className="w-50 max-w-[90%]">
        {
          <IndexSection>
            <IndexLabel active={state < 0} title="Todos" onClick={() => setState(-1)} />
            {index_labels}
          </IndexSection>
        }
      </div>

      <div className="w-200 max-w-full space-y-15">
        <CommandSection>{state < 0 ? all_commands : sections[state].element}</CommandSection>
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
