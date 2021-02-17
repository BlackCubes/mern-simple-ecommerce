import styled from 'styled-components';

export const Footer = styled.div`
  font-family: inherit;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black_gray};
`;

export const FooterFollow = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.lime_green};
  list-style: none;
  text-align: center;
`;

export const FooterFollowHeader = styled.div`
  font-size: 1.6rem;
  text-transform: uppercase;
  padding-bottom: 1rem;
`;

export const FooterFollowNavigation = styled.div`
  margin-top: 0.5rem;
`;

export const FooterFollowList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const FooterFollowItem = styled.li`
  display: inline-block;

  & a {
    display: block;
    margin: 0 1rem;
    padding: 0.6rem;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.black_gray};
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
