import styled from 'styled-components';

export const FooterStyled = styled.footer`
  position: absolute;
  font-family: inherit;
  color: ${(props) => props.theme.colors.white};
  width: 100%;
  height: 2.5rem;
  background-color: ${(props) => props.theme.colors.black_gray};
  bottom: 0;
`;

export const FooterFollowStyled = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.moderate_blue};
  background-image: linear-gradient(7deg, #505cc1, #ff1e5e);
  list-style: none;
  text-align: center;
`;

export const FooterFollowHeaderStyled = styled.div`
  font-size: 1.6rem;
  text-transform: uppercase;
  padding-bottom: 1rem;

  @media ${(props) => props.theme.responsive.below_899} {
    font-size: 1.5rem;
  }

  @media ${(props) => props.theme.responsive.below_599} {
    font-size: 1.4rem;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.responsive.below_379} {
    font-size: 1.1rem;
  }
`;

export const FooterFollowNavigationStyled = styled.div`
  margin-top: 0.5rem;
`;

export const FooterFollowListStyled = styled.ul`
  margin: 0;
  padding: 0;
`;

export const FooterFollowItemStyled = styled.li`
  display: inline-block;

  & a {
    display: block;
    margin: 0 1rem;
    padding: 0.6rem;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.moderate_blue_dark};
    border-radius: 50%;

    &:hover {
      color: inherit;
      text-decoration: none;
    }

    @media ${(props) => props.theme.responsive.below_479} {
      padding: 0.4rem;
    }
  }

  & svg {
    font-size: 3.2rem;
    width: 3.1rem;
    height: 3.1rem;

    @media ${(props) => props.theme.responsive.below_899} {
      font-size: 2.7rem;
      width: 2.6rem;
      height: 2.6rem;
    }

    @media ${(props) => props.theme.responsive.below_599} {
      font-size: 2.2rem;
      width: 2.1rem;
      height: 2.1rem;
    }

    @media ${(props) => props.theme.responsive.below_479} {
      font-size: 1.7rem;
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

export const FooterLowerStyled = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  background-color: ${(props) => props.theme.colors.black_gray};
`;

export const FooterCopyrightStyled = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem 0 3.5rem;
`;

export const FooterCopyrightContentStyled = styled.div`
  display: block;
  padding: 1.5rem 0;
  line-height: 2;
  text-align: center;

  & small {
    @media ${(props) => props.theme.responsive.below_899} {
      font-size: 0.8rem;
    }

    @media ${(props) => props.theme.responsive.below_479} {
      font-size: 0.7rem;
    }

    @media ${(props) => props.theme.responsive.below_379} {
      font-size: 0.6rem;
    }
  }

  & a {
    color: ${(props) => props.theme.colors.white};

    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }
`;
