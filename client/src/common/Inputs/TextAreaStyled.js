import styled from 'styled-components';

export default styled.textarea`
  display: block;
  font-family: inherit;
  width: 100%;
  height: 20rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem;
  background-color: rgba(51, 70, 144, 0.1);
  border: none;
  border-bottom: 0.3rem solid transparent;
  border-radius: 0.2rem;
  transition: all 0.3s;
  resize: none;

  &:focus {
    outline: none;
    border-bottom: 0.3rem solid ${(props) => props.theme.colors.moderate_blue_2};
  }

  &:focus:invalid {
    border-bottom: 0.3rem solid ${(props) => props.theme.colors.red};
  }

  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.moderate_dark_blue};
  }

  &.error {
    border-bottom: 0.3rem solid ${(props) => props.theme.colors.red};
  }

  &:placeholder-shown + span {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-2rem);
  }

  &:focus:invalid + span {
    color: ${(props) => props.theme.colors.red};
  }

  &.error + span {
    color: ${(props) => props.theme.colors.red};
  }

  @media ${(props) => props.theme.responsive.below_599} {
    height: 15rem;
    padding: 1.3rem;
  }
`;
