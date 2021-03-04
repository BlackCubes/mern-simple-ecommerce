import styled from 'styled-components';

export const RatingsStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const RatingIconStyled = styled.div`
  cursor: ${({ cursortype }) => cursortype || 'default'};
`;
