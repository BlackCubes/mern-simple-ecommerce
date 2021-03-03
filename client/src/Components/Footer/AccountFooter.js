import React from 'react';

import { Link } from '../../common';
import {
  AccountFooterStyled,
  AccountFooterCreatedStyled,
  AccountFooterCreatedContainerStyled,
  AccountFooterCreatedTitleStyled,
  AccountFooterCreatedNavigationStyled,
  AccountFooterCreatedListStyled,
  AccountFooterCreatedItemStyled,
} from '../../common/Footer';
import { Paragraph } from '../../common/Typography';

const AccountFooter = () => (
  <AccountFooterStyled>
    <AccountFooterCreatedStyled>
      <AccountFooterCreatedContainerStyled>
        <AccountFooterCreatedTitleStyled>
          <Paragraph sizetype="small">
            Created by&nbsp;
            <span>Elias Gutierrez</span>
          </Paragraph>
        </AccountFooterCreatedTitleStyled>

        <AccountFooterCreatedNavigationStyled>
          <AccountFooterCreatedListStyled>
            <AccountFooterCreatedItemStyled>
              <Link href="https://github.com/blackcubes">GitHub</Link>
            </AccountFooterCreatedItemStyled>

            <AccountFooterCreatedItemStyled>
              <Link href="https://www.linkedin.com/in/eliasgutierrez1991/">
                Linkedin
              </Link>
            </AccountFooterCreatedItemStyled>
          </AccountFooterCreatedListStyled>
        </AccountFooterCreatedNavigationStyled>
      </AccountFooterCreatedContainerStyled>
    </AccountFooterCreatedStyled>
  </AccountFooterStyled>
);

export default AccountFooter;
