import React, { useState } from 'react'

import { Container, Content, Form, Label, TextArea } from './styles'

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded'

import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import { toast } from 'react-toastify'

const NewBook = () => {
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [descricao, setDescricao] = useState('')

  const [tituloError, setTituloError] = useState('')
  const [autorError, setAutorError] = useState('')
  const [descricaoError, setDescricaoError] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonText, setButtonText] = useState('Cadastrar')
  const [buttonOpacity, setButtonOpacity] = useState(1)

  const navigate = useNavigate()

  function voltar() {
    navigate('/')
  }

  async function cadastrarLivro(event) {
    event.preventDefault()
    setIsSubmitting(true)
    setButtonText('Cadastrando...')
    setButtonOpacity(0.5)

    if (titulo === '' || autor === '' || descricao === '') {
      if (titulo === '') setTituloError('Campo obrigatório *')
      if (autor === '') setAutorError('Campo obrigatório *')
      if (descricao === '') setDescricaoError('Campo obrigatório *')

      setIsSubmitting(false)
      setButtonText('Cadastrar')
      setButtonOpacity(1)
      return
    }

    try {
      await axios.post('http://localhost:8000/livros', {
        titulo: titulo,
        autor: autor,
        descricao: descricao,
      })

      setTitulo('')
      setAutor('')
      setDescricao('')

      setTituloError(null)
      setAutorError(null)
      setDescricaoError(null)

      toast.success('Livro Cadastrado !', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    } catch (err) {
      console.error('Erro ao cadastrar livro:', err)
    } finally {
      setTimeout(() => {
        setIsSubmitting(false)
        setButtonText('Cadastrar')
        setButtonOpacity(1)
        navigate('/')
      }, 1000)
    }
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

        <Form onSubmit={cadastrarLivro}>
          <Label>Titulo</Label>
          <input
            type="text"
            placeholder="Titulo do livro"
            className="input"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          {tituloError && <p style={{ color: '#f1341b' }}>{tituloError}</p>}

          <Label style={{ marginTop: '20px' }}>Autor</Label>
          <input
            type="text"
            placeholder="Nome do autor"
            className="input"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
          {autorError && <p style={{ color: '#f1341b' }}>{autorError}</p>}

          <Label style={{ marginTop: '20px' }}>Descrição</Label>
          <TextArea
            placeholder="Descrição do livro..."
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          {descricaoError && (
            <p style={{ color: '#f1341b' }}>{descricaoError}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            style={{ opacity: buttonOpacity }}
          >
            {buttonText === 'Cadastrando...' ? (
              <div className="loader">
                <div className="loader-circle"></div>
                <p>Cadastrando...</p>
              </div>
            ) : (
              <>
                <AddCircleOutlineRoundedIcon />
                <span>{buttonText}</span>
              </>
            )}
          </button>
        </Form>
      </Content>
    </Container>
  )
}

export default NewBook
