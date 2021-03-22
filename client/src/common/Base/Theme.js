export default {
  colors: {
    black: '#000',
    black_gray: '#111111',
    white: '#fff',
    red: '#ff0000',
    vivid_pink: '#ff1e5e',
    vivid_pink_tone: '#f62762',
    moderate_blue: '#505cc1',
    moderate_blue_2: '#5067c1',
    moderate_blue_dark: '#334690',
    lime_green: '#37bd6c',
    transparent: 'transparent',
  },
  fontsizes: {
    xxsmall: '0.8rem',
    xsmall: '1.1rem',
    small: '1.3rem',
  },
  responsive: {
    // MEDIA QUERY MANAGER
    /*
      Desktop-First

      Let 1em = 16px

      MAX-WIDTH:
      74.9375em = 1199px
      56.1875em = 899px
      37.4375em = 599px
      29.9375em = 479px
      23.6875em = 379px

      MAX-WIDTH AND MIN-WIDTH
      61.9375em = 991px (max) AND 48em = 768px (min)
      74.9375em = 1199px (max) AND 62em = 992px (min)
    */

    // Responsive Range: [1199px - 900px]
    below_1199: 'only screen and (max-width: 74.9375em)',
    // Responsive Range: [899px - 600px]
    below_899: 'only screen and (max-width: 56.1875em)',
    // Responsive Range: [599px - 480px]
    below_599: 'only screen and (max-width: 37.4375em)',
    // Responsive Range: [479px - 380px]
    below_479: 'only screen and (max-width: 29.9375em)',
    // Responsive Range: [379px - 0]
    below_379: 'only screen and (max-width: 23.6875em)',
    // Responsive Range: [1199px - 992px] and portrait
    between_1199_992:
      'only screen and (max-width: 74.9375em) and (min-width: 62em) and (orientation: portrait)',
    // Responsive Range: [991px - 768px] and portrait
    between_991_768:
      'only screen and (max-width: 61.9375em) and (min-width: 48em) and (orientation: portrait)',
  },
};
