# Simple PDV

Simple PDV é um sistema de ponto de venda (PDV) simples, desenvolvido em Node.js com TypeScript, utilizando Express para a criação de APIs RESTful e Prisma como ORM para gerenciar o banco de dados.

## 📋 Funcionalidades

- **Gerenciamento de Usuários**:
  - Criar, listar, atualizar e deletar usuários.
  - Autenticação e login de usuários.
  - Gerenciamento de permissões e papéis (roles).

- **Gerenciamento de Produtos e Categorias**:
  - CRUD de produtos e categorias.

- **Gerenciamento de Pedidos**:
  - Criar e gerenciar pedidos e itens.

- **Upload de Arquivos**:
  - Upload e gerenciamento de arquivos estáticos.

## 🚀 Tecnologias Utilizadas

- **Node.js** com **TypeScript**
- **Express** para criação de APIs RESTful
- **Prisma** como ORM
- **SQLite** como banco de dados
- **Swagger** para documentação da API
- **Morgan** para logs de requisições
- **Cors** para controle de acesso
- **JWT** para autenticação

## 📂 Estrutura do Projeto

```plaintext
simple-pdv/
├── prisma/                # Configuração do Prisma e migrações
├── src/
│   ├── controlers/        # Controladores com a lógica de negócios
│   ├── midleware/         # Middlewares (autenticação, autorização, etc.)
│   ├── routers/           # Rotas da API
│   ├── swagger.ts         # Configuração do Swagger
│   ├── app.ts             # Configuração principal do servidor
│   └── server.ts          # Inicialização do servidor
├── [package.json](http://_vscodecontentref_/1)           # Dependências e scripts do projeto
├── [tsconfig.json](http://_vscodecontentref_/2)          # Configuração do TypeScript
└── [README.md](http://_vscodecontentref_/3)              # Documentação do projeto