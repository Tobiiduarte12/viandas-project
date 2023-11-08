import styled from "styled-components";

export const BurguerMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const BurguerLinks = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: center;
  justify-content: space-around;
  top: 100px;
  right: 0;
  width: 200px;
  height: 100vh;
  background-color: #000000d7;
  border: 1px solid var(--color-ut-orange);
`;
