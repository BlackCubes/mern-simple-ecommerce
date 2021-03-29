import styled from 'styled-components';

export const FormStyled = styled.form`
  width: 45rem;
  margin-left: auto;
  margin-right: auto;

  @media ${(props) => props.theme.responsive.below_899} {
    width: 35rem;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    width: 25rem;
  }
`;

export const FormGroupStyled = styled.div(
  {
    margin: '1.5rem 0',
    '&.tri-field-1': {
      '@media only screen and (max-width: 56.1875em)': {
        width: 'calc(100% / 2.1)',
      },
      '@media only screen and (max-width: 29.9375em)': {
        width: 'calc(100% / 2.3)',
      },
      '@media only screen and (max-width: 23.6875em)': {
        width: 'calc(100% / 2.8)',
      },
    },
    '&.tri-field-2': {
      '@media only screen and (max-width: 56.1875em)': {
        width: 'calc(100% / 4)',
      },
      '@media only screen and (max-width: 29.9375em)': {
        width: 'calc(100% / 3.7)',
      },
      '@media only screen and (max-width: 23.6875em)': {
        width: 'calc(100% / 3.3)',
      },
    },
    '&.tri-field-3': {
      '@media only screen and (max-width: 56.1875em)': {
        width: 'calc(100% / 3.8)',
      },
      '@media only screen and (max-width: 29.9375em)': {
        width: 'calc(100% / 3.5)',
      },
      '@media only screen and (max-width: 23.6875em)': {
        width: 'calc(100% / 3)',
      },
    },
    '@media only screen and (max-width: 29.9375em)': {
      margin: '1rem 0',
    },
    '@media only screen and (max-width: 23.6875em)': {
      margin: '0.5rem 0',
    },
  },
  ({ addlstyle }) => addlstyle
);
