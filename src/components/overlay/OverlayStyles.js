import styled from "styled-components";

export const OverlayStyled = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 0;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(5px);
  cursor: pointer;
`;
