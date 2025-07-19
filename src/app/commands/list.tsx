import { CommandDetails } from "@/components/commands/Details"

export const commandList = [
  {
    title: "Gerais",
    element: (
      <>
        <CommandDetails
          title="/code"
          description="Execute código em diversas linguagens de programação populares."
        />
        <CommandDetails title="/raffle" description="Realiza um sorteio simples." />
        <CommandDetails title="/dice" description="Lança um ou mais dados personalizáveis." />
        <CommandDetails title="/say" description="Faz o bot falar alguma bobagem." />
        <CommandDetails title="/ping" description="Verifica o tempo de atraso das respostas do bot." />
      </>
    ),
  },
  {
    title: "Binds",
    element: (
      <>
        <CommandDetails title="/bind register" description="Cria uma bind com um determinado nome." />
        <CommandDetails title="/bind say" description="Imprime uma determinada bind no chat." />
        <CommandDetails title="/bind modify" description="Altera o texto de uma bind criada por você." />
        <CommandDetails title="/bind delete" description="Deleta uma bind criada por você." />
        <CommandDetails title="/bind info" description="Exibe informações úteis sobre uma bind." />
        <CommandDetails title="/bind list-mine" description="Exibe uma lista das binds criadas por você." />
      </>
    ),
  },
  {
    title: "Imagens",
    element: (
      <>
        <CommandDetails
          title="/image find-anime"
          description="Descubra o nome de um anime usando um frame dele."
        />
        <CommandDetails title="/image make-gif" description="Transforma uma imagem em um GIF estático." />
      </>
    ),
  },
  {
    title: "Steam",
    element: (
      <>
        <CommandDetails title="/steam user" description="Exibe informações sobre algum usuário Steam." />
        <CommandDetails title="/steam workshop" description="Exibe informações sobre um item da Oficina Steam." />
      </>
    ),
  },
  {
    title: "Desenvolvedor",
    element: (
      <>
        <CommandDetails title="./info" description="Imprime algumas informações sobre o host." />
        <CommandDetails title="./shutdown" description="Interrompe a execução do bot." />
        <CommandDetails title="./guildperms" description="Imprime as permissões do bot na guilda." />
        <CommandDetails title="./channelperms" description="Imprime as permissões do bot no canal." />
        <CommandDetails title="./delmsg" description="Deleta uma mensagem enviada pelo bot." />
      </>
    ),
  },
]
