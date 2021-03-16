import React from 'react';

import { Image } from '../common';
import {
  HomePageSectionsContainerStyled,
  HomeSectionStyled,
  HomeImageStyled,
  HomeContentStyled,
  FakeStoreSectionStyled,
  FakeStoreSplitHolderStyled,
  FakeStoreSplitColorStyled,
  FakeStoreImageStyled,
  FakeStoreContent,
} from '../common/Pages';
import { HeadingPrimary, Paragraph } from '../common/Typography';

const HomePage = () => (
  <HomePageSectionsContainerStyled>
    <HomeSectionStyled>
      <HomeImageStyled>
        <Image
          rest={{ src: '/img/logo-large.png', alt: 'Large Company Logo' }}
        />
      </HomeImageStyled>

      <HomeContentStyled>
        <HeadingPrimary textcolor="white">
          Giving Power To The Users. Be What You Want. Own That Power.
        </HeadingPrimary>
      </HomeContentStyled>
    </HomeSectionStyled>

    <FakeStoreSectionStyled>
      <FakeStoreSplitHolderStyled>
        <FakeStoreSplitColorStyled />
      </FakeStoreSplitHolderStyled>

      <FakeStoreImageStyled>
        <Image
          rest={{
            src: 'https://fakestoreapi.com/icons/intro.svg',
            alt: 'Fake Store API',
          }}
        />
      </FakeStoreImageStyled>

      <FakeStoreContent>
        <Paragraph>
          With the power of the Fake Store API, you can own of of your favorite
          products: electronics, jewelery, clothing and more
        </Paragraph>
      </FakeStoreContent>
    </FakeStoreSectionStyled>
  </HomePageSectionsContainerStyled>
);

export default HomePage;
