import styled from "styled-components";

export const Contanier = styled.div`
  margin: 20px 20px;
  flex-direction: column;
  font-size: 1.1em;
  display: flex;
  flex: 1;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  &:hover {
    color: #0593ff;
  }
`;

export const Bottom = styled.div`
  display: flex;
  cursor: pointer;
  margin: auto;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    color: #f9f9f9;
    font-weight: bold;
  }

  .firt {
    margin-right: 10px;
    border: 2px solid #1273eb;
    border-radius: 5px;
  }

  .second {
    border-radius: 5px;
    background-color: #1273eb;
    img {
      margin-right: 10px;
      svg {
        fill: #fff;
      }
    }
  }
`;
