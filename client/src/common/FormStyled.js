import styled from 'styled-components';

export const FormStyled = styled.form`
  width: 45rem;
  margin-left: auto;
  margin-right: auto;
`;

export const FormGroupStyled = styled.div(
  {
    margin: '1.5rem 0',
    '&.tri-field-1': {
      '@media only screen and (max-width: 56.1875em)': {
        width: 'calc(100% / 2.5)',
      },
    },
    '&.tri-field-2': {
      '@media only screen and (max-width: 56.1875em)': {
        width: 'calc(100% / 4)',
      },
    },
    '&.tri-field-3': {
      '@media only screen and (max-width: 56.1875em)': {
        width: 'calc(100% / 3)',
      },
    },
  },
  ({ addlstyle }) => addlstyle
);
