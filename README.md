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

---

## 🚀 Tecnologias Utilizadas

- **Node.js** com **TypeScript**
- **Express** para criação de APIs RESTful
- **Prisma** como ORM
- **SQLite** como banco de dados
- **Swagger** para documentação da API
- **Morgan** para logs de requisições
- **Cors** para controle de acesso
- **JWT** para autenticação

---

## 📂 Estrutura do Projeto

```plaintext
simple-pdv/
├── prisma/                # Configuração do Prisma e migrações
│   ├── schema.prisma      # Definição do modelo de dados
│   ├── migrations/        # Arquivos de migração do Prisma
│   └── seed.ts            # Script para popular o banco de dados
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

---

## 🔑 Usuário Administrador e Papéis (Roles)

### Usuário Administrador
O sistema cria automaticamente um usuário administrador ao executar o script de seed. Este usuário possui permissões completas para gerenciar o sistema.

- **Credenciais do Administrador**:
  - **Username**: `admin`
  - **Email**: `admin@example.com`
  - **Senha**: `admin123`

### Papéis (Roles)
Os papéis definem as permissões atribuídas aos usuários. O papel `Admin` é criado automaticamente e possui todas as permissões básicas, como:

- `CREATE_USER`: Permissão para criar usuários.
- `DELETE_USER`: Permissão para deletar usuários.
- `UPDATE_USER`: Permissão para atualizar usuários.
- `VIEW_USER`: Permissão para visualizar usuários.

Essas permissões são associadas ao papel `Admin` no banco de dados.

Ao criar um usuário, informe o nome do papel (`roleName`) no corpo da requisição. Exemplo:

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123",
  "userName": "johndoe",
  "cpf": "12345678901",
  "roleName": "Admin"
}

---

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

3. Configure o banco de dados no arquivo `.env` (por padrão, usa SQLite):
   ```env
   DATABASE_URL=file:./dev.db
   ```

  ## 🔧 Configuração de Variáveis de Ambiente

  4. Certifique-se de configurar Chave secreta usada para gerar tokens de acesso no arquivo `.env` por exemplo :

  ```env
    JWT_SECRET=3f8b9c2a4d6e7f1a2b3c4d5e6f7g8h9i
    REFRESH_JWT_SECRET=9h8g7f6e5d4c3b2a1f0e9d8c7b6a5f4g
  ```

Essas chaves são essenciais para o funcionamento do sistema de autenticação baseado em JWT. **Nunca compartilhe essas chaves publicamente.**

5. Execute as migrações do banco de dados:
   ```bash
   npx prisma migrate dev
   ```

6. Execute o script de seed para criar o usuário administrador e os papéis:
   ```bash
   npm run seed
   ```

7. Inicie o servidor:
   ```bash
   npm run dev
   ```

---

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

---

## 🧪 Testes

Os testes estão localizados na pasta `src/test`. Para executá-los, use:

```bash
npm run test
```

---

## 📜 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

### 📬 Contato

Se tiver dúvidas ou sugestões, entre em contato:

- **Autor**: David
- **Email**: [david.bezerra@ufrpe.br](mailto:david.bezerra@ufrpe.br)
- **GitHub**: [dreiver1](https://github.com/dreiver1)
```

---