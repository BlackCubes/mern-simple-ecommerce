import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: fixed;
  width: 70%;
  padding: 3.6rem;
  background-color: ${(props) => props.theme.colors.white};
  border: 0.1rem solid #ccc;
  box-shadow: 0.1rem 0.1rem 0.1rem ${(props) => props.theme.colors.black};
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  z-index: 500;
`;

export const ModalHeaderStyled = styled.div`
  margin-bottom: 1rem;
`;

export const ModalBodyStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  margin: 1.4rem -7.5rem 0;
`;

export const ModalButtonStyled = styled.div`
  button {
    position: absolute;
    padding: 1.2rem;
    background: 0 0;
    top: 0;
    right: 0;
    z-index: 1000;
    border: 0;
  }
`;
