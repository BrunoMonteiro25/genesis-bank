import React from 'react'
import { ModalDiv, Container, Content } from './modalDeleteStyles'
import { ReactComponent as Fechar } from '../../assets/fechar2.svg'

const ModalDelete = ({ id = 'modal', onClose = () => {}, handleDelete }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose()
  }

  return (
    <ModalDiv id={id} onClick={handleOutsideClick}>
      <Container>
        <button className="fechar" onClick={onClose}>
          <Fechar />
        </button>
        <Content>
          <p className="titulo">Tem certeza que deseja apagar esse livro?</p>
          <div className="containerButton">
            <button className="cancelar" onClick={onClose}>
              <p>Cancelar</p>
            </button>
            <button className="excluir" onClick={handleDelete}>
              <p>Sim</p>
            </button>
          </div>
        </Content>
      </Container>
    </ModalDiv>
  )
}

export default ModalDelete
