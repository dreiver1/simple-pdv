```markdown
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
├── package.json           # Dependências e scripts do projeto
├── tsconfig.json          # Configuração do TypeScript
└── README.md              # Documentação do projeto
```

## 🛠️ Instalação e Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/simple-pdv.git
   cd simple-pdv
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o banco de dados no arquivo `prisma/schema.prisma` (por padrão, usa SQLite).

4. Execute as migrações do banco de dados:
   ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor:
   ```bash
   npm run dev
   ```

## 🌐 Acessando as Rotas Principais

### Documentação da API
Acesse a documentação interativa gerada pelo Swagger:
```
http://localhost:3000/api-docs
```

### Rotas Principais
- **Login**:  
  `POST /login`  
  Endpoint para autenticação de usuários.

- **Usuários**:  
  - `POST /user` - Criar um novo usuário (requer permissão `CREATE_USER`).
  - `GET /user` - Listar todos os usuários.
  - `GET /user/:userId` - Obter detalhes de um usuário pelo ID.
  - `DELETE /user/:userId` - Deletar um usuário (requer permissão `DELETE_USER`).
  - `PUT /user/:userId` - Atualizar um usuário (requer permissão `UPDATE_USER`).

- **Produtos e Categorias**:  
  - `GET /product` - Listar todos os produtos.
  - `GET /category` - Listar todas as categorias.

- **Pedidos**:  
  - `POST /order` - Criar um novo pedido.
  - `GET /order` - Listar todos os pedidos.

- **Arquivos**:  
  - `GET /files` - Acessar arquivos estáticos.

## 🔑 Autenticação

O sistema utiliza **JWT (JSON Web Token)** para autenticação. Para acessar rotas protegidas, você deve incluir o token no cabeçalho da requisição:

```plaintext
Authorization: Bearer <seu-token>
```

## 🧪 Testes

Os testes estão localizados na pasta `src/test`. Para executá-los, use:

```bash
npm run test
```

## 📜 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

### 📬 Contato

Se tiver dúvidas ou sugestões, entre em contato:

- **Autor**: David
- **Email**: [seu-email@example.com](mailto:seu-email@example.com)
- **GitHub**: [seu-usuario](https://github.com/seu-usuario)
```

### O que foi adicionado:
1. **Comandos para instalar e iniciar o projeto**.
2. **Como acessar as rotas principais**.
3. **Detalhes sobre autenticação e uso do JWT**.

Substitua os placeholders como `seu-usuario` e `seu-email@example.com` com suas informações reais antes de publicar no GitHub.