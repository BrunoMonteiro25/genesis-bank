import React from 'react'
import { ModalDiv, Container, Content } from './modalDetailsStyles'

import { ReactComponent as Fechar } from '../../assets/fechar2.svg'

const ModalDetails = ({ id = 'modal', onClose = () => {}, livro }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose()
  }

  return (
    <ModalDiv id={id} onClick={handleOutsideClick}>
      <Container>
        <Content>
          <div className="titulo">
            <p>Detalhes do Livro</p>
            <button className="fechar" onClick={onClose}>
              <Fechar />
            </button>
          </div>

          <div className="detalhes">
            <p>
              <span>Titulo: </span>
              {livro.titulo}
            </p>

            <p>
              <span>Autor: </span>
              {livro.autor}
            </p>

            <div className="desc">
              <p>
                <span>Descrição: </span>
                {livro.descricao}
              </p>
            </div>
          </div>
        </Content>
      </Container>
    </ModalDiv>
  )
}

export default ModalDetails
