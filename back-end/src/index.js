const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

// Conectar ao MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/teste-genesis-bank', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Conectado ao MongoDB')
  })
  .catch((erro) => {
    console.log('Erro ao conectar ao MongoDB:', erro)
  })

// Modelo de schema para os dados que serão salvos no MongoDB
const Livro = mongoose.model('Livro', {
  titulo: String,
  autor: String,
  descricao: String,
  dataCriacao: {
    type: Date,
    default: Date.now,
  },
})

// Configuração do middleware para o bodyParser
app.use(bodyParser.json())

// Middleware para permitir solicitações de outros domínios (CORS)
app.use(cors())

// Rota para cadastrar livros
app.post('/livros', (req, res) => {
  const { titulo, autor, descricao } = req.body

  const novoLivro = new Livro({ titulo, autor, descricao })

  novoLivro
    .save()
    .then(() => {
      res.status(201).json({ message: 'Livro cadastrado com sucesso' })
    })
    .catch((erro) => {
      res.status(400).json({ error: 'Erro ao cadastrar livro' })
    })
})

// Rota para listar todos os livros
app.get('/livros', (req, res) => {
  Livro.find()
    .then((livros) => {
      res.json(livros)
    })
    .catch((erro) => {
      res.status(400).json({ error: 'Erro ao buscar livros' })
    })
})

// Rota para deletar um livro pelo ID
app.delete('/livros/:id', (req, res) => {
  const livroId = req.params.id

  Livro.findByIdAndDelete(livroId)
    .then(() => {
      res.json({ message: 'Livro deletado com sucesso' })
    })
    .catch((erro) => {
      res.status(400).json({ error: 'Erro ao deletar livro' })
    })
})

// Inicia o servidor na porta 8000
app.listen(8000, () => {
  console.log('Servidor iniciado na porta 8000')
})
