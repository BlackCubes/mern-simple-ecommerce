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

  @media ${(props) => props.theme.responsive.below_1199} {
    width: 100%;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  @media ${(props) => props.theme.responsive.below_379} {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ModalStyled = styled.div`
  width: 50%;
  position: relative;
  margin: 6rem auto;
  padding: 4rem;
  background-color: ${(props) => props.theme.colors.white};

  @media ${(props) => props.theme.responsive.below_1199} {
    width: 60%;
  }

  @media ${(props) => props.theme.responsive.below_899} {
    width: 80%;
  }

  @media ${(props) => props.theme.responsive.below_599} {
    width: 90%;
    padding: 3rem;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    width: 95%;
    padding: 1.3rem;
  }

  @media ${(props) => props.theme.responsive.below_379} {
    padding: 1rem;
  }
`;

export const ModalHeaderStyled = styled.div`
  margin-bottom: 1rem;

  @media ${(props) => props.theme.responsive.below_379} {
    padding-left: 0.75rem;
  }
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
