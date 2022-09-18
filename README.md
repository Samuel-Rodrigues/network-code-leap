# Network - Code leap

<br/>

## 🤖 Prints Android
<table>
  <thead><tr><td>Create an account</td><td>Guest mode</td><td>Home</td><td>Post</td><td>User</td></tr></thead>
  <tbody>
  <tr>
<td>

![home](https://user-images.githubusercontent.com/28707053/189492452-f6e655e9-4e6c-4456-b3e6-f779a491c38b.png)
</td>
<td>

![guest mode](https://user-images.githubusercontent.com/28707053/189492469-01592f0e-792f-4f6e-a65d-827b41b85a6e.png)
</td>
<td>

![home](https://user-images.githubusercontent.com/28707053/189486207-713ac363-cf01-4735-a0ab-3aca7b48b61a.png)
</td>
<td>

![add post](https://user-images.githubusercontent.com/28707053/189486437-4e45c320-45b2-4dc3-8d2f-9c3625404d72.png)
</td>
<td>

![user](https://user-images.githubusercontent.com/28707053/189486306-0bb3c615-661f-49d5-9b22-46d8ae306c83.png)
</td>
    </tr>
  </tbody>
</table>

## 📱 Prints iOS

<table>
  <thead><tr><td>Create an account</td><td>Guest mode</td><td>Home</td><td>User</td></tr></thead>
  <tbody>
  <tr>
<td>

![Screen Shot 2022-09-10 at 12 56 37](https://user-images.githubusercontent.com/28707053/189492533-f5ef0c15-84fd-4765-bf22-9edde127b46d.png)
</td>
<td>

![Screen Shot 2022-09-10 at 10 15 58](https://user-images.githubusercontent.com/28707053/189486387-f99b7d1e-126a-4b77-ac96-91a9f23996f3.png)
</td>
<td>

![Screen Shot 2022-09-10 at 10 16 19](https://user-images.githubusercontent.com/28707053/189486399-9f05e6ed-1013-4311-8e7a-4ada6ec95b2c.png)
</td>
<td>

![Screen Shot 2022-09-10 at 10 16 25](https://user-images.githubusercontent.com/28707053/189486404-8257825e-eaad-40f2-bffe-09fb728bb52e.png)
</td>
    </tr>
  </tbody>
</table>

# 🏗 Arquitetura
<details><summary>Redux</summary>
 - Os slices são responsáveis por armazenar os state da aplicação. Todo tipo de informação que possa ser utilizada em mais de um container ou component deve ser armazenada em um reducer. O reducer / slice também fica responsável por ouvir as actions e tratar os efeitos colaterais.
</details>

<details><summary>Actions</summary>
 - São responsáveis por fazer as requests para APIs e serviços da aplicação
</details>

<details><summary>Components</summary>
 - Todos os components visuais compartilhados em mais de uma screen ficam neste folder.
</details>

<details><summary>Screens</summary>
 - Telas / interfaces que possuem rotas próprias.
</details>

<details><summary>Utils</summary>
 - Neste folder ficam todos os helpers, enums e modules que possam facilitar o gerenciamento de dependências externas no projeto.
</details>


# 🚀 Começando

### 📋 Pré-requisitos

O que você precisa para usar esse projeto?

- Ambiente react-native
- [Node LTS](https://nodejs.org/en/)

<br/>

# 🔧 Instalação

- Clone o projeto para sua máquina

```bash
$ git clone https://github.com/Samuel-Rodrigues/network-code-leap.git
```

- Instale as dependências

```bash
$ npm install
```

- Instale as dependências do IOS

```bash
$ cd ios && pod install && cd ..
```

# 🔧 Rodando projeto com Expo

```bash
$ npx expo start --clear

```

<br/>

# 🔩 Analise de testes do Typescript e lint

```bash
$ npm run lint
```

<br/>

# 🛠️ Construído com

A arquitetura deste projeto foi pensada para ser escalável e duradoura. Segue uma explicação objetiva de algumas das bibliotecas / métodos utilizados

### [Expo](https://docs.expo.dev/)

- [SKD atualizada](https://docs.expo.dev/development/compatibility/) com as mais `novas` `features` do `react-native`
- `Acesso` aos projetos `Android` e `IOS` (expo bare workflow)
- Documentação recheada e [APIs](https://docs.expo.dev/versions/latest/) `frequentimente atualizadas`
- Não observei `nenhuma desvantagem` em relação ao `react-native CLI`

### [Navigation](https://reactnavigation.org/docs/getting-started/)

- Lida com toda parte de `navegação` da aplicação `stack`, `tab` etc

### [Cloud Firestore](https://firebase.google.com/docs/firestore)

- Utilizado para salvar username do usuário quando o mesmo realizar um cadastro na aplicação

### [Firebase Authentication](https://firebase.google.com/docs/auth)

- Lida com toda parte de autenticação por senha e login anônimo

### [Type script](https://reactnative.dev/docs/typescript)

- Ajuda no `ambiente de desenvolvimento`
- Abre novas possibilidades, como por exemplo o `Path mapping`
- Aumenta a `produtividade` no trabalho em `equipe`

### [Reactotron](https://github.com/infinitered/reactotron)

- Ferramenta que auxilia no `debug` e `log` da aplicação, uma pena que ainda não tenha suporte ao novo Redux toolkit.

### [Redux Toolkit](https://redux-toolkit.js.org/)

- O Redux ficou muito conhecido com o amplo uso da `arquitetura Flux`, trazendo uma boa abordagem para `gerenciar estado` da aplicação. Com o passar do tempo, foi observado que o código necessário estava ficando custoso / verboso e aumentava muito a complexidade do projeto, por este motivo surgiu a nova forma de utilizar essa lib - O `Redux toolkit` faz uma `abstração do redux` e diminui bastante os arquivos que precisamos para usar o redux nativamente.

### [Styled components](https://styled-components.com/)

- Styled components é minha lib favorita no mundo react, com ela consigo `abstrair` todo `css` do componente (particulamente não gosto de css declarativo)
- Outra vantagem é que podemos trabalhar muito bem com `mudanças` do `css a partir das propriedades` dos componentes, nunca foi tão fácil unir condicionais com css.

### [Path mapping](https://reactnative.dev/docs/typescript)

- Os `alias` personalizados nos permite fazer `imports` mais bonitos e mais fáceis de utilizar.
  <details><summary>Exemplo</summary>
  <img width="676" alt="image" src="https://user-images.githubusercontent.com/28707053/187322870-83d0f2b5-c6ed-40a7-9829-dafd46971b0a.png">
</details>

### [Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

- A utilização de snippets é um forma de criarmos `modelos` para alguns tipos de `códigos` da aplicação. A utilização por todos membros da equipe vai garantir uma fácil manutenção e `padronização` de componentes / arquivos.
  <details><summary>Exemplo</summary>
  <img width="838" alt="image" src="https://user-images.githubusercontent.com/28707053/187322906-bda63546-9dd2-441c-bea1-054e45d59ff0.png">
</details>
