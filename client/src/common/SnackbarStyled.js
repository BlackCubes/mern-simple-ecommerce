import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 3rem;
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    bottom: 3rem;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
`;

export default styled.div`
  visibility: hidden;
  position: fixed;
  min-width: 25rem;
  margin-left: -12.5rem;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  color: white;
  background-color: ${(props) => props.theme.colors[props.bgcolortype]};
  font-size: 1.6rem;
  font-weight: 400;
  text-align: center;
  border-radius: 0.2rem;
  padding: 1.6rem;

  &.show {
    visibility: visible;
    animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 2.5s;
  }
`;
