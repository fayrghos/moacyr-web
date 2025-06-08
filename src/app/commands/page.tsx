import { CommandInfo, CommandSection } from "@/components/commands"

export const metadata = {
  title: "Comandos",
}

export default function Commands() {
  return (
    <main className="flex justify-center items-center">
      <div className="w-220 py-20 space-y-15">
        <CommandSection title="Gerais">
          <CommandInfo title="/code" info="Execute código em diversas linguagens de programação populares." />
          <CommandInfo title="/raffle" info="Realiza um sorteio simples." />
          <CommandInfo title="/dice" info="Lança um ou mais dados personalizáveis." />
          <CommandInfo title="/say" info="Faz o bot falar alguma bobagem." />
          <CommandInfo title="/ping" info="Verifica o tempo de atraso das respostas do bot." />
        </CommandSection>

        <CommandSection title="Binds">
          <CommandInfo title="/bind register" info="Cria uma bind com um determinado nome." />
          <CommandInfo title="/bind say" info="Imprime uma determinada bind no chat." />
          <CommandInfo title="/bind modify" info="Altera o texto de uma bind criada por você." />
          <CommandInfo title="/bind delete" info="Deleta uma bind criada por você." />
          <CommandInfo title="/bind info" info="Exibe informações úteis sobre uma bind." />
          <CommandInfo title="/bind list-mine" info="Exibe uma lista das binds criadas por você." />
        </CommandSection>

        <CommandSection title="Imagens">
          <CommandInfo title="/image find-anime" info="Descubra o nome de um anime usando um frame dele." />
          <CommandInfo title="/image make-gif" info="Transforma uma imagem em um GIF estático." />
        </CommandSection>

        <CommandSection title="Steam">
          <CommandInfo title="/steam user-id" info="Exibe uma lista dos IDs de um usuário Steam." />
          <CommandInfo title="/steam workshop" info="Exibe informações sobre um item na Oficina Steam." />
        </CommandSection>

        <CommandSection title="Desenvolvedor">
          <CommandInfo title="./info" info="Imprime algumas informações sobre o host." />
          <CommandInfo title="./shutdown" info="Interrompe a execução do bot." />
          <CommandInfo title="./guildperms" info="Imprime as permissões do bot na guilda." />
          <CommandInfo title="./channelperms" info="Imprime as permissões do bot no canal." />
          <CommandInfo title="./delmsg" info="Deleta uma mensagem enviada pelo bot." />
        </CommandSection>
      </div>
    </main>
  )
}
