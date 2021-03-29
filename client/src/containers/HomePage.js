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
  CategoryCardBodyContentStyled,
  CategoryCardButtonStyled,
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
            Give Power.
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
              favorite products and show what you have become
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
              {homeCategories &&
                homeCategories.electronics.length &&
                homeCategories.electronics.map((electronic) => (
                  <CategoryCardBodyContentStyled key={electronic.id}>
                    <Small colorType="black_gray">{electronic.title}</Small>
                  </CategoryCardBodyContentStyled>
                ))}

              <CategoryCardButtonStyled>
                <Button
                  rest={{
                    type: 'button',
                    onClick: () => categoryPath('electronics'),
                  }}
                >
                  Choose
                </Button>
              </CategoryCardButtonStyled>
            </CategoryCardBodyStyled>
          </CategoryCardStyled>

          <CategoryCardStyled>
            <CategoryCardHeaderStyled>
              <HeadingQuaternary>Women Clothing</HeadingQuaternary>
            </CategoryCardHeaderStyled>

            <CategoryCardBodyStyled>
              {(homeCategories && homeCategories.womenClothing.length) > 0 &&
                homeCategories.womenClothing.map((clothing) => (
                  <CategoryCardBodyContentStyled key={clothing.id}>
                    <Small colorType="black_gray">{clothing.title}</Small>
                  </CategoryCardBodyContentStyled>
                ))}

              <CategoryCardButtonStyled>
                <Button
                  rest={{
                    type: 'button',
                    onClick: () => categoryPath('women clothing'),
                  }}
                >
                  Choose
                </Button>
              </CategoryCardButtonStyled>
            </CategoryCardBodyStyled>
          </CategoryCardStyled>

          <CategoryCardStyled>
            <CategoryCardHeaderStyled>
              <HeadingQuaternary>Jewelery</HeadingQuaternary>
            </CategoryCardHeaderStyled>

            <CategoryCardBodyStyled>
              {homeCategories &&
                homeCategories.jeweleries.length > 0 &&
                homeCategories.jeweleries.map((jewelery) => (
                  <CategoryCardBodyContentStyled key={jewelery.id}>
                    <Small colorType="black_gray">{jewelery.title}</Small>
                  </CategoryCardBodyContentStyled>
                ))}

              <CategoryCardButtonStyled>
                <Button
                  rest={{
                    type: 'button',
                    onClick: () => categoryPath('jewelery'),
                  }}
                >
                  Choose
                </Button>
              </CategoryCardButtonStyled>
            </CategoryCardBodyStyled>
          </CategoryCardStyled>
        </CategoryCardContainerStyled>
      </CategorySectionStyled>
    </HomePageSectionsContainerStyled>
  );
};

export default HomePage;
