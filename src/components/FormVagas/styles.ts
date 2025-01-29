import styled from 'styled-components'

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.secondaryColor};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
  gap: 8px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

export const InputField = styled.input`
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.primaryColor};
  outline-color: ${(props) => props.theme.primaryColor};
  width: 100%;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`

export const SearchButton = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.secondaryColor};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 767px) {
    font-size: 16px;
    height: 36px;
  }
`
