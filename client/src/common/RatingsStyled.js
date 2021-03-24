import styled from 'styled-components';

export const RatingsStyled = styled.div`
  display: flex;
  justify-content: left;

  &.ratings-static {
    justify-content: left;

    @media ${(props) => props.theme.responsive.below_479} {
      justify-content: space-evenly;
    }
  }

  @media ${(props) => props.theme.responsive.below_479} {
    justify-content: space-evenly;
  }
`;

export const RatingIconStyled = styled.div`
  cursor: ${({ cursortype }) => cursortype || 'default'};
`;
