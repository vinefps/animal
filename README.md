Projeto UPX

Pré-requisitos
Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. Se você ainda não tem o Node.js instalado, você pode baixá-lo e instalá-lo a partir do site oficial do Node.js.
Verificando a Instalação do Node.js

Para verificar se o Node.js está instalado corretamente e para verificar a versão atual, abra o terminal e execute os seguintes comandos:
node --version



Este projeto utiliza várias ferramentas e bibliotecas para desenvolvimento e execução. Abaixo estão as principais ferramentas e como você pode instalá-las usando o npm no terminal do VSCode.

Ferramentas e Bibliotecas Utilizadas
Dependências de Produção:

Next.js: Framework React para renderização no lado do servidor e do cliente.
React e React-DOM: Bibliotecas para construir interfaces de usuário com React.
TailwindCSS: Framework utilitário de CSS de primeira classe para construir designs personalizados rapidamente.
TypeScript: Superset do JavaScript que adiciona tipagem estática.
Eslint e eslint-config-next: Ferramentas de linting para manter a consistência do código.
PostCSS e Autoprefixer: Ferramentas para processar CSS com suporte para várias versões de navegadores.

Dependências de Desenvolvimento:
@types/node, @types/react, @types/react-dom: Tipos TypeScript para Node.js e React.
@types/react-modal: Tipos TypeScript para a biblioteca react-modal.
Como Instalar as Ferramentas
Para instalar todas as ferramentas e bibliotecas necessárias, siga os passos abaixo:

Abra o terminal do VSCode.
Navegue até o diretório raiz do projeto (upx).
Instalar Dependências de Produção:
Execute o seguinte comando no terminal:

npm install


Este comando instalará todas as dependências listadas no arquivo package.json.

Instalar Dependências de Desenvolvimento:
Se você também deseja instalar as dependências de desenvolvimento (listadas em devDependencies), execute:

npm install --save-dev
