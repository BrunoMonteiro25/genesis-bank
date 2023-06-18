# Teste Genesis Bank

### Feito com: ReactJS, Styled Components, Material UI, NodeJS(Express) e MongoDB

##

### Para testar o projeto:

Requisitos prévios:
1. Certifique-se de que você tem o Node.js e o MongoDB instalados em sua máquina.

2. Clonar o repositório:
- Abra o terminal (ou prompt de comando) em sua máquina.
- Navegue até o diretório onde você deseja clonar o projeto.
- Execute o comando abaixo para clonar o repositório do GitHub
```
git clone https://github.com/BrunoMonteiro25/genesis-bank.git
```

## 

### Back-end - NodeJS(Express) e MongoDB

1. Instalar as dependências:
- No terminal, navegue até a pasta back-end com o comando:
```
cd back-end
```
- Execute o comando abaixo para instalar todas as dependências listadas no arquivo package.json.
```
npm install
```

2. Configurar o MongoDB:
- Certifique-se de ter o MongoDB instalado em sua máquina. Caso contrário, faça o download e instale-o seguindo as instruções do site oficial do MongoDB.
- Abra o MongoDB e inicie o servidor do MongoDB local com a URI:
```
mongodb://localhost:27017/
```
- Ao executar a aplicação, ela se conectará automaticamente ao MongoDB usando a URI especificada no código (mongodb://localhost:27017/teste-genesis-bank).

3. Rodar o projeto:
```
node src/index.js
```

4. Acesse o servidor local na rota:
```
http://localhost:8000/livros
```

##

### Front-end - ReactJS, Styled Components, Material UI

1. Instalar as dependências:
- No terminal, navegue até a pasta front-end com o comando:
```
cd front-end
```
- Execute o comando abaixo para instalar todas as dependências listadas no arquivo package.json.
```
npm install
```

2. Rodar o projeto:
```
npm start
```

3. Acesse o projeto na rota:
```
http://localhost:3000/
```

##

### Funcionalidades
- Listagem de livros
- Adicionar um novo livro
- Visualizar detalhes de um livro
- Remover um livro

### Dependências
Back-end:
- express
- body-parser
- cors
- mongoose

Front-end:
- styled-components
- material UI: @mui/material, @emotion/react, @emotion/styled, @mui/icons-material
- react-toastify
- react-router-dom
- axios

##

### Telas

Home:
![home](https://github.com/BrunoMonteiro25/genesis-bank/assets/98993736/68e0f77b-b820-402f-abe9-ec3291a6090a)

Cadastrar Livros:
![novo-livro](https://github.com/BrunoMonteiro25/genesis-bank/assets/98993736/11fe8b9b-d935-4811-8d28-a0c4431f8613)

Home com a lista atualizada:
![lista-atualizada](https://github.com/BrunoMonteiro25/genesis-bank/assets/98993736/4555c62f-23c6-4dc6-b0c9-16f034b6bd0d)

Modal que exibe os detalhes do livro:
![modal-detalhes](https://github.com/BrunoMonteiro25/genesis-bank/assets/98993736/86fe269e-76f6-440c-a88b-44fb8bdd5af7)

Modal para apagar um livro:
![modal-delete](https://github.com/BrunoMonteiro25/genesis-bank/assets/98993736/86fa6443-0b80-491f-bf4e-44d1c136dc08)
