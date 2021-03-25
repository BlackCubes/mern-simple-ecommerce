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
`;
