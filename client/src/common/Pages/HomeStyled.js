import styled from 'styled-components';

export const HomePageSectionsContainerStyled = styled.div`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
`;

export const HomeSectionStyled = styled.section`
  width: 100%;
  min-height: calc(100vh - 11rem);
  background-color: ${(props) => props.theme.colors.black_gray};
  text-align: center;
`;

export const HomeImageStyled = styled.div`
  width: 44rem;
`;

export const FakeStoreSectionStyled = styled.div`
  position: relative;
  width: 117rem;
  background-color: ${(props) => props.theme.colors.vivid_pink};
`;

export const FakeStoreSplitHolderStyled = styled.div`
  float: none;
`;

export const FakeStoreSplitColorStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
  top: 0;
  left: 40.5rem;
  transform: translateX(-104%);
`;

export const FakeStoreImageStyled = styled.div`
  width: 20rem;
`;

export const FakeStoreContent = styled.div`
  float: right;
  width: 60rem;
  margin-top: 5rem;
`;
