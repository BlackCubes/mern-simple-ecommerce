import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FooterStyled, Link } from '../common';

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
              <FontAwesomeIcon icon="github" />
            </Link>
          </FooterStyled.FooterFollowItem>

          <FooterStyled.FooterFollowItem>
            <Link href="https://www.linkedin.com/in/eliasgutierrez1991/">
              <FontAwesomeIcon icon="linkedin" />
            </Link>
          </FooterStyled.FooterFollowItem>
        </FooterStyled.FooterFollowList>
      </FooterStyled.FooterFollowNavigation>
    </FooterStyled.FooterFollow>
  </FooterStyled.Footer>
);

export default Footer;
