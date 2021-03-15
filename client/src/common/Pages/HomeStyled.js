import styled from 'styled-components';

export const HomePageSectionsContainerStyled = styled.div`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
`;

export const HomePageStyled = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.black_gray};
  text-align: center;
`;

export const HomePageImage = styled.div`
  width: 44rem;
`;
