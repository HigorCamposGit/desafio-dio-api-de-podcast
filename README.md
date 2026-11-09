# 🎙️ Gerenciador de PodCasts

---

Uma API RESTful desenvolvida para o gerenciamento e catalogação de episódios de podcasts. Projeto realizado utilizando **TypeScript** e o módulo nativo **HTTP** do **Node.js**, como parte do desafio prático da **Formação Node.js Fundamentals**.

---

## 🤝 Agradecimentos

Agradecimento especial ao professor **Felipe Aguiar** ([@felipeAguiarCode](https://github.com/felipeAguiarCode)) pela didática, condução dos conteúdos e mentoria ao longo da **Formação Node.js Fundamentals**. O aprendizado prático ministrado foi fundamental para a construção e evolução da estrutura deste projeto.

---

## 🎯 Sobre o Projeto

O objetivo principal desta aplicação é fornecer uma estrutura sólida de backend para listagem, filtragem e busca de episódios de podcasts organizados por categorias e apresentadores. 

Partindo de uma abordagem inicial, o projeto passou por um processo completo de **refatoração e higienização de código (sanitization)** para atingir padrões de código limpo (*Clean Code*), removendo dependências desnecessárias de frameworks de alto nível como o Express e explorando os fundamentos da plataforma Node.js.

### 🌟 Destaques da Arquitetura
- **Zero Frameworks de Roteamento:** Construído 100% sobre o módulo nativo `http` do Node.js.
- **Arquitetura em Camadas (Layered Architecture):** Separação clara de responsabilidades em `Controllers`, `Services`, `Repositories`, `Models` e `Routes`.
- **I/O Não-Bloqueante:** Leitura assíncrona da camada de dados utilizando `fs/promises`.
- **Tipagem Estática & Segurança:** Implementação completa com **TypeScript** para garantir inferência de tipos e prevenção de erros em tempo de compilação.
- **Tratamento de Erros Estruturado:** Blocos `try/catch` centralizados nos controllers para captura e resposta padronizada de falhas HTTP (`500 Internal Server Error`).

---
💻 Como Executar no VS Code
Abra o projeto no Visual Studio Code.

Abra o terminal integrado navegando em Terminal > New Terminal (ou pelo atalho Ctrl + ').

Certifique-se de estar na raiz do projeto e instale as dependências (caso ainda não tenha instalado):


`npm install`
Inicie o servidor em modo de observação (watch):


`npm run start:watch`
O terminal exibirá a mensagem de confirmação:🚀 Servidor rodando na porta http://localhost:3333

🌐 Como Testar no Navegador
Com o servidor rodando via terminal, abra qualquer navegador de sua preferência (ex: LibreWolf, Chrome, Firefox) e acesse as rotas disponíveis:

Rota de Boas-Vindas - `URL: http://localhost:3333/`

Retorno esperado: {"message": "Gerenciador de Podcasts - API NodeJS Com Typescript e HTTP Module"}

Listar Todos os Episódios:
URL: http://localhost:3333/api/list

Retorno esperado: Array completo com todos os podcasts cadastrados.
Filtrar Podcasts por Nome:

URL: http://localhost:3333/api/podcasts?p=Fala Glauber
Retorno esperado: Array contendo apenas os episódios correspondentes ao parâmetro de busca.

📌 Endpoints da API
1. Boas-Vindas (Health Check)
Rota: GET /

Descrição: Retorna o status de execução da API.

2. Listar Todos os Episódios
Rota: GET /api/list

Descrição: Retorna a lista completa de podcasts cadastrados no repositório.

3. Filtrar Podcasts por Nome
Rota: GET /api/podcasts?p={nomeDoPodcast}

Descrição: Retorna episódios filtrados pelo parâmetro p via Query String (insensível a maiúsculas/minúsculas).

---

## 🛠️ Tecnologias e Ferramentas

| Tecnologia | Descrição |
|---|---|
|**VScode** | Editor de código usado.
|**Git e Github** | Versionamento de código.
| **Node.js** | Ambiente de execução JavaScript no lado do servidor |
| **TypeScript** | Superset JavaScript que adiciona tipagem estática ao código |
| **HTTP Module (Nativo)** | Criação do servidor e gerenciamento de rotas/requisições |
| **FS / Promises** | Manipulação assíncrona do sistema de arquivos para o repositório JSON |
| **TSX** | Executor TypeScript de alta performance para ambiente de desenvolvimento |
| **Dotenv** | Gerenciamento de variáveis de ambiente (`.env`) |

---

## 📁 Estrutura de Pastas

```text
desafio-dio-api-de-podcast/
├── src/
│   ├── controllers/      # Gerenciamento de requisições e respostas HTTP
│   │   └── podcasts-controller.ts
│   ├── services/         # Regras de negócio e intermediação de dados
│   │   ├── list-episodes-service.ts
│   │   └── list-podcasts-service.ts
│   ├── repositories/     # Camada de persistência (JSON) e leitura assíncrona
│   │   ├── podcast-repository.ts
│   │   └── podcasts.json
│   ├── models/           # Interfaces e definições de dados do TypeScript
│   │   └── podcast-model.ts
│   ├── routes/           # Mapeamento de rotas e verbos HTTP (Enums)
│   │   └── routes.ts
│   ├── app.ts            # Roteador central e interceptador de requisições
│   └── server.ts         # Ponto de entrada (Entry point) e inicialização do servidor
├── .env                  # Configurações de ambiente (Porta)
├── .gitignore            # Filtro de arquivos para o Git
├── package.json          # Dependências e scripts do projeto
├── tsconfig.json         # Configurações do compilador TypeScript
└── README.md             # Documentação do repositório
```

## 📝 Como Utilizar

1. Clone este repositório: `https://github.com/giovanesouza/api-gerenciador-podcasts.git`.
2. Instale as dependências usando `npm install`.
3. Inicie o servidor executando `npm run start:dev`.
4. Acesse os endpoints fornecidos para listar os episódios de podcasts ou filtrá-los por nome de podcast.
