import styled from 'styled-components';

export const RatingsStyled = styled.div`
  display: flex;
`;

export const RatingIconStyled = styled.div`
  cursor: ${({ cursortype }) => cursortype || 'default'};
`;
