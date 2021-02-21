import styled from 'styled-components';

export const FormStyled = styled.form`
  width: 45rem;
  margin-left: auto;
  margin-right: auto;
`;

export const FormGroupStyled = styled.div(({ addlstyle }) => addlstyle || null)`
  margin: 1.5rem 0;
`;

export const FormTwoInputsStyled = styled.div`
  flex: 1 22rem;
`;

export const FormAddressStyled = styled.div`
  float: left;
  padding: 0 0.75rem;
`;
