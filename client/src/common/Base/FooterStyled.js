import styled from 'styled-components';

export const FooterStyled = styled.div`
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
  }

  & svg {
    font-size: 3.2rem;
    width: 3.1rem;
    height: 3.1rem;
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

  & a {
    color: ${(props) => props.theme.colors.white};

    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }
`;
