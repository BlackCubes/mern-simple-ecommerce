import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Image } from '../common';
import {
  CategorySectionStyled,
  CategoryContentStyled,
  CategoryCardContainerStyled,
  CategoryCardStyled,
  CategoryCardHeaderStyled,
  CategoryCardBodyStyled,
  HomePageSectionsContainerStyled,
  HomeSectionStyled,
  HomeImageStyled,
  HomeContentStyled,
  FakeStoreSectionStyled,
  FakeStoreContainerStyled,
  FakeStoreSplitHolderStyled,
  FakeStoreSplitColorStyled,
  FakeStoreImageStyled,
  FakeStoreContent,
} from '../common/Pages';
import {
  HeadingPrimary,
  HeadingQuaternary,
  HeadingSecondary,
  Small,
} from '../common/Typography';

import { useProductContext } from '../context';

const HomePage = () => {
  const { homeCategories, getHomeCategories } = useProductContext();
  const history = useHistory();

  const categoryPath = (path) => history.push(`/products/category/${path}`);

  useEffect(() => {
    getHomeCategories();
  }, []);

  return (
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
        <FakeStoreContainerStyled>
          <FakeStoreSplitHolderStyled>
            <FakeStoreSplitColorStyled />
          </FakeStoreSplitHolderStyled>

          <FakeStoreImageStyled>
            <Image
              rest={{
                src: 'https://fakestoreapi.herokuapp.com/icons/intro.svg',
                alt: 'Fake Store API',
              }}
            />
          </FakeStoreImageStyled>

          <FakeStoreContent>
            <HeadingSecondary>
              With the power of the Fake Store API, you can own one of your
              favorite products: electronics, jewelery, clothing and more
            </HeadingSecondary>
          </FakeStoreContent>
        </FakeStoreContainerStyled>
      </FakeStoreSectionStyled>

      <CategorySectionStyled>
        <CategoryContentStyled>
          <HeadingSecondary>
            Explore different categories for your needs to be the best version
            for today, tomorrow, and the next year
          </HeadingSecondary>
        </CategoryContentStyled>

        <CategoryCardContainerStyled>
          <CategoryCardStyled>
            <CategoryCardHeaderStyled>
              <HeadingQuaternary>Electronics</HeadingQuaternary>
            </CategoryCardHeaderStyled>

            <CategoryCardBodyStyled>
              {homeCategories.electronics &&
                homeCategories.electronics.map((electronic) => (
                  <Small key={electronic.id}>{electronic.title}</Small>
                ))}

              <Button
                rest={{
                  type: 'button',
                  onClick: () => categoryPath('electronics'),
                }}
              >
                Choose
              </Button>
            </CategoryCardBodyStyled>
          </CategoryCardStyled>

          <CategoryCardStyled>
            <CategoryCardHeaderStyled>
              <HeadingQuaternary>Women Clothing</HeadingQuaternary>
            </CategoryCardHeaderStyled>

            <CategoryCardBodyStyled>
              {homeCategories.womenClothing > 0 &&
                homeCategories.womenClothing.map((clothing) => (
                  <Small key={clothing.id}>{clothing.title}</Small>
                ))}

              <Button
                rest={{
                  type: 'button',
                  onClick: () => categoryPath('women clothing'),
                }}
              >
                Choose
              </Button>
            </CategoryCardBodyStyled>
          </CategoryCardStyled>

          <CategoryCardStyled>
            <CategoryCardHeaderStyled>
              <HeadingQuaternary>Jewelery</HeadingQuaternary>
            </CategoryCardHeaderStyled>

            <CategoryCardBodyStyled>
              {homeCategories.jeweleries > 0 &&
                homeCategories.jeweleries.map((jewelery) => (
                  <Small key={jewelery.id}>{jewelery.title}</Small>
                ))}

              <Button
                rest={{
                  type: 'button',
                  onClick: () => categoryPath('jewelery'),
                }}
              >
                Choose
              </Button>
            </CategoryCardBodyStyled>
          </CategoryCardStyled>
        </CategoryCardContainerStyled>
      </CategorySectionStyled>
    </HomePageSectionsContainerStyled>
  );
};

export default HomePage;
