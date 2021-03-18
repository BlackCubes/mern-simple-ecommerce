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
import { HeadingPrimary, HeadingSecondary } from '../common/Typography';

const HomePage = () => (
  <HomePageSectionsContainerStyled>
    <HomeSectionStyled>
      <HomeImageStyled>
        <Image
          rest={{ src: '/img/logo-large.png', alt: 'Large Company Logo' }}
        />
      </HomeImageStyled>

      <HomeContentStyled>
        <HeadingPrimary fontweight={600} textcolor="white">
          Give Power To The Users.
          <br />
          Be What You Want.
          <br />
          Own That Power.
        </HeadingPrimary>
      </HomeContentStyled>
    </HomeSectionStyled>

    <FakeStoreSectionStyled className="clearfix">
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
        <HeadingSecondary>
          With the power of the Fake Store API, you can own of of your favorite
          products: electronics, jewelery, clothing and more
        </HeadingSecondary>
      </FakeStoreContent>
    </FakeStoreSectionStyled>
  </HomePageSectionsContainerStyled>
);

export default HomePage;
