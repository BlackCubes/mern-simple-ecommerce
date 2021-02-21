import styled from 'styled-components';

export const ModalOverlayStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: ${({ modaltoggle }) =>
    modaltoggle ? 'translateY(0)' : 'translateY(-150vh)'};
  z-index: 2000;
`;

export const ModalWindowStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(29, 37, 44, 0.65);
  opacity: ${({ modaltoggle }) => (modaltoggle ? 1 : 0)};
  overflow-y: scroll;
  overflow-x: hidden;
  touch-action: pan-y;
`;

export const ModalContainerStyled = styled.div`
  width: 117rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const ModalStyled = styled.div`
  width: 50%;
  position: relative;
  margin: 6rem auto;
  padding: 4rem;
  background-color: ${(props) => props.theme.colors.white};
`;

// export const ModalContainerStyled = styled.div`
//   width: 117rem;
//   margin-left: auto;
//   margin-right: auto;
//   padding-left: 1.5rem;
//   padding-right: 1.5rem;
//   transform: ${({ modaltoggle }) =>
//     modaltoggle ? 'translateY(0)' : 'translateY(-100vh)'};
//   opacity: ${({ modaltoggle }) => (modaltoggle ? 1 : 0)};
// `;

// export const ModalStyled = styled.div`
//   position: fixed;
//   width: 50%;
//   padding: 3.6rem;
//   background-color: ${(props) => props.theme.colors.white};
//   border: 0.1rem solid #ccc;
//   box-shadow: 0.1rem 0.1rem 0.1rem ${(props) => props.theme.colors.black};
//   left: 15%;
//   top: 30%;
//   box-sizing: border-box;
//   transition: all 0.3s ease-out;
//   z-index: 500;
// `;

export const ModalHeaderStyled = styled.div`
  margin-bottom: 1rem;
`;

export const ModalBodyStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
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
