import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`

export const VagasList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;
  list-style: none;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
