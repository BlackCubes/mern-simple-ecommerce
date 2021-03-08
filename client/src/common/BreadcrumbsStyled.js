import styled from 'styled-components';

export const BreadcrumbsContainerStyled = styled.div`
  width: 96%;
  margin: 1rem auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const BreadcrumbsStyled = styled.nav`
  display: inline-block;
  box-sizing: border-box;
`;

export const BreadcrumbsListStyled = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const BreadcrumbsListItemStyled = styled.li`
  display: inline;
  text-transform: capitalize;

  &:nth-child(1n + 2)::before {
    content: ' ';
    display: inline-block;
    width: 0;
    height: 0;
    margin: 0 0.7rem;
    border-top: 0.4rem solid transparent;
    border-bottom: 0.4rem solid transparent;
    border-left: 0.4rem solid #55555a;
  }
`;
