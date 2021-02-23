import styled from 'styled-components';

export default styled.div`
  transform: ${({ transformscaletype }) =>
    `scale(${transformscaletype})` || 'scale(1)'};
`;
