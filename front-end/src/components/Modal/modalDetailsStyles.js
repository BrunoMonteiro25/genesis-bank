import styled from 'styled-components'

export const ModalDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: center;
  position: fixed;
`

export const Container = styled.div`
  margin-top: 250px;
  background-color: #eee;
  color: #17181f;
  width: 650px;
  height: max-content;
  border-radius: 6px;
  position: relative;
  padding-bottom: 20px;

  @media (max-width: 715px) {
    width: 450px;
  }

  @media (max-width: 615px) {
    width: 350px;
  }
`

export const Content = styled.div`
  display: flex;
  margin: 0px 20px;
  width: 610px;
  flex-direction: column;
  margin-top: 20px;

  @media (max-width: 715px) {
    width: 410px;
  }

  @media (max-width: 615px) {
    width: 310px;
  }

  .titulo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-weight: 500;
      color: #17181f;
      font-size: 20px;
      letter-spacing: 1px;
      font-family: 'Poppins', sans-serif;
    }

    .fechar {
      display: flex;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background-color: #eee;
      border: none;
      outline: none;
      cursor: pointer;
      z-index: 100;

      &:hover {
        background-color: #fff;
      }
    }
  }

  .detalhes {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    margin-top: 50px;

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      color: #222222;

      span {
        font-size: 16px;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        color: #17181f;
        letter-spacing: 0.5px;
      }
    }
  }

  .desc {
    max-width: 590px;

    span {
      font-size: 16px;
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
      color: #17181f;
      letter-spacing: 0.5px;
      margin-left: -2px;
    }

    p {
      text-align: left;
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      color: #222222;
      margin-left: 2px;
      line-height: 1.5;
    }
  }
`
