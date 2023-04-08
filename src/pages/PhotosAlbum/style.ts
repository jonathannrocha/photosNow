import styled from "styled-components";

export const Contanier = styled.div`
  flex: 1;
  padding: 10px 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  align-items: flex-start;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    display: flex;
    flex-direction: column;

    img {
      width: 50%;
      fill: black;
    }
  }
  div span {
    text-align: center;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    margin: 10px 0;
    height: 50px;

    &::first-letter {
      text-transform: uppercase;
    }
  }
`;
