import styled from 'styled-components'

export const Container = styled.div`
  max-width: 40rem;
  margin: 50px auto 0 auto;
  overflow-x: hidden;
`

export const Content = styled.div`
  background-color: #2b2b4b;
  color: #fff;
  padding: 30px 0px 30px 30px;
  font-family: 'Poppins', sans-serif;
  border-radius: 6px;

  .title {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 20px;
    margin-bottom: 50px;
    letter-spacing: 1px;
  }

  .button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    color: #fff;
    gap: 5px;
    font-size: 16px;
    letter-spacing: 1px;
    margin-bottom: 40px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-top: 30px;
  font-family: 'Poppins', sans-serif;

  label {
    font-size: 18px !important;
  }

  .input {
    height: 50px;
    padding-left: 20px;
    font-size: 16px;
    border: none;
    margin-bottom: 5px;
    border-radius: 8px;
    letter-spacing: 1px;
    background-color: #44465f;
    color: #fff;
    outline: none !important;

    &::placeholder {
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      color: #ccc;
    }

    &:focus {
      border: 2px solid #6f74c6;
    }

    &::selection {
      background-color: #6f74c6;
    }

    @media screen and (max-width: 615px) {
      width: 380px;
    }
  }

  button {
    padding: 15px;
    width: 187px;
    border-radius: 6px;
    background-color: #0d830b;
    border: none;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    margin-top: 15px;

    &:hover {
      background-color: #0e870b;
    }
  }

  .loader {
    display: flex;
    align-items: center;
  }

  .loader-circle {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 3px solid #ccc;
    border-top-color: #fff;
    animation: loader-spin 1s linear infinite;
    margin-right: 8px;
  }

  @keyframes loader-spin {
    to {
      transform: rotate(360deg);
    }
  }
`

export const Label = styled.label`
  font-size: 20px;
  margin-bottom: 5px;
  letter-spacing: 1px;
  color: #fff;
`

export const TextArea = styled.textarea`
  width: 500px;
  height: 100px;
  padding-left: 20px;
  padding-top: 15px;
  font-size: 16px;
  border: none;
  margin-bottom: 5px;
  border-radius: 8px;
  letter-spacing: 1px;
  background-color: #44465f;
  color: #fff;
  outline: none !important;
  resize: none;
  font-family: 'Roboto', sans-serif;

  &::placeholder {
    font-size: 14px;
    color: #ccc;
  }

  &:focus {
    border: 2px solid #6f74c6;
  }

  &::selection {
    background-color: #6f74c6;
  }

  @media screen and (max-width: 615px) {
    width: 380px;
  }
`
