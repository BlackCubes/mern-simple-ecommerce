import styled from 'styled-components';

export default styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
})`
  width: 2.5rem;
  height: 2.5rem;

  @media ${(props) => props.theme.responsive.below_899} {
    width: 2.3rem;
    height: 2.3rem;
  }

  @media ${(props) => props.theme.responsive.below_599} {
    width: 2rem;
    height: 2rem;
  }

  @media ${(props) => props.theme.responsive.below_379} {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
