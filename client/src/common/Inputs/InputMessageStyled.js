import styled from 'styled-components';

export default styled.span`
  display: block;
  color: ${(props) => props.theme.colors.moderate_blue_2};
  margin-top: 0.5rem;
  text-align: left;
  transition: all 0.3s;

  @media ${(props) => props.theme.responsive.below_379} {
    font-size: 0.75rem;
  }
`;
