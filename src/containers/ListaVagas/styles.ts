import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;

  @media (max-width: 767px) {
    max-width: 95%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 90%;
  }

  @media (min-width: 1024px) {
    max-width: 85%;
  }
`

export const VagasList = styled.ul`
  display: grid;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;
  list-style: none;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    margin-bottom: 32px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
