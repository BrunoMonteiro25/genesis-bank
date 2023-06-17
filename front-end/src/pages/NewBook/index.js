import React from 'react'

import { Container, Content, Form, Label, TextArea } from './styles'

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded'

import { useNavigate } from 'react-router-dom'

const NewBook = () => {
  const navigate = useNavigate()

  function voltar() {
    navigate('/')
  }

  return (
    <Container>
      <Content>
        <button onClick={voltar} className="button">
          <KeyboardBackspaceRoundedIcon />
          Voltar
        </button>
        <p className="title">
          <AddCircleOutlineRoundedIcon />
          Novo livro
        </p>

        <Form>
          <Label>Titulo</Label>
          <input type="text" placeholder="Titulo do livro" className="input" />

          <Label style={{ marginTop: '20px' }}>Autor</Label>
          <input type="text" placeholder="Nome do autor" className="input" />

          <Label style={{ marginTop: '20px' }}>Descrição</Label>
          <TextArea placeholder="Descrição do livro..." />

          <button>
            <AddCircleOutlineRoundedIcon />
            Cadastrar
          </button>
        </Form>
      </Content>
    </Container>
  )
}

export default NewBook
