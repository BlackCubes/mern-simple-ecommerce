import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FooterStyled, Link, Small } from '../common';

library.add(faGithub, faLinkedin);

const Footer = () => (
  <FooterStyled.Footer>
    <FooterStyled.FooterFollow>
      <FooterStyled.FooterFollowHeader>
        Follow Elias Gutierrez
      </FooterStyled.FooterFollowHeader>

      <FooterStyled.FooterFollowNavigation>
        <FooterStyled.FooterFollowList>
          <FooterStyled.FooterFollowItem>
            <Link href="https://github.com/blackcubes">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </Link>
          </FooterStyled.FooterFollowItem>

          <FooterStyled.FooterFollowItem>
            <Link href="https://www.linkedin.com/in/eliasgutierrez1991/">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </Link>
          </FooterStyled.FooterFollowItem>
        </FooterStyled.FooterFollowList>
      </FooterStyled.FooterFollowNavigation>
    </FooterStyled.FooterFollow>

    <FooterStyled.FooterLower>
      <FooterStyled.FooterCopyright>
        <FooterStyled.FooterCopyrightContent>
          <Small sizetype="xxsmall" colorType="white">
            Email:&nbsp;
            <Link href="mailto:gutierrezelias1991@gmail.com">
              gutierrezelias1991@gmail.com
            </Link>
            &nbsp;&nbsp; | &nbsp; Phone:&nbsp;
            <Link href="tel:5595953839">559-595-3839</Link>
            <br />
            3pm - 8pm PST Mon-Fri &nbsp; | &nbsp; 10am - 4pm Sat&Sun
          </Small>
        </FooterStyled.FooterCopyrightContent>
      </FooterStyled.FooterCopyright>
    </FooterStyled.FooterLower>
  </FooterStyled.Footer>
);

export default Footer;
