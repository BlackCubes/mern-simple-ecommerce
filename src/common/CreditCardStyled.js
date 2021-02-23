import styled from 'styled-components';

export default styled.div`
  transform: ${({ transformscale }) =>
    `scale(${transformscale})` || 'scale(1)'};
`;
