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
  top: 100px;
  justify-content: space-around;
  right: 0;
  width: 200px;
  height: 100vh;
  background-color: #000000d7;
  border: 1px solid var(--color-ut-orange);
  padding-bottom: 40px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 10;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(5px);
  display: none;
`;
