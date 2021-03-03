import styled from 'styled-components';

export const AccountFooterStyled = styled.footer`
  position: absolute;
  font-family: inherit;
  width: 100%;
  height: 16rem;
  background-color: ${(props) => props.theme.colors.black_gray};
  bottom: 0;
`;

export const AccountFooterCreatedStyled = styled.div`
  height: 10rem;
`;

export const AccountFooterCreatedContainerStyled = styled.div`
  padding: 2rem;
  text-align: center;
  list-style: none;
`;

export const AccountFooterCreatedTitleStyled = styled.div`
  color: #546c84;
  padding-bottom: 1rem;

  & span {
    font-size: 1.5rem;
    color: #0067aa;
    text-transform: uppercase;
  }
`;

export const AccountFooterCreatedNavigationStyled = styled.div`
  padding: 1.3rem;
`;

export const AccountFooterCreatedListStyled = styled.ul`
  margin: 0;
  padding: 0;
`;

export const AccountFooterCreatedItemStyled = styled.li`
  display: inline-block;
  font-size: 1.2rem;

  & a {
    color: #546c84;
  }

  &:nth-child(2)::before {
    content: ' | ';
    margin: 0 0.8rem;
  }
`;