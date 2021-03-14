import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Image, Link } from '../../common';

import {
  CategorySidebarStyled,
  CategorySidebarHeaderStyled,
  CategorySidebarCardStyled,
  CategorySidebarCardImageStyled,
  CategorySidebarCardInfoStyled,
  CategorySidebarCardInfoTitleStyled,
  CategorySidebarCardInfoPriceStyled,
  SidebarStyled,
  SidebarContainerStyled,
} from '../../common/Sidebar';

import { Paragraph } from '../../common/Typography';

import { useProductContext } from '../../context/ProductContext';

const CategorySidebar = () => {
  const [similarProducts, setSimilarProducts] = useState(null);
  const { products, product, category } = useProductContext();

  const categoryProducts = (productCategory) => {
    if (products) {
      const similar = products.filter(
        (prod) => prod.category === productCategory && prod.id !== product.id
      );
      setSimilarProducts(similar);
    }
  };

  useEffect(() => {
    if (category) categoryProducts(category);
  }, [category]);

  return (
    <SidebarStyled>
      <SidebarContainerStyled>
        <CategorySidebarStyled>
          <CategorySidebarHeaderStyled>
            <Paragraph tagtype="strong">Similar Category</Paragraph>
          </CategorySidebarHeaderStyled>

          {similarProducts &&
            similarProducts.slice(0, 4).map((prop) => (
              <CategorySidebarCardStyled key={prop.id}>
                <CategorySidebarCardImageStyled>
                  <RouterLink to={`/products/${prop.id}`}>
                    <Image rest={{ src: prop.image, alt: prop.title }} />
                  </RouterLink>
                </CategorySidebarCardImageStyled>

                <CategorySidebarCardInfoStyled>
                  <CategorySidebarCardInfoTitleStyled>
                    <Paragraph>
                      <Link href={`/products/${prop.id}`}>{prop.title}</Link>
                    </Paragraph>
                  </CategorySidebarCardInfoTitleStyled>

                  <CategorySidebarCardInfoPriceStyled>
                    <Paragraph tagtype="strong">
                      {prop.price.toFixed(2)}
                    </Paragraph>
                  </CategorySidebarCardInfoPriceStyled>
                </CategorySidebarCardInfoStyled>
              </CategorySidebarCardStyled>
            ))}
        </CategorySidebarStyled>
      </SidebarContainerStyled>
    </SidebarStyled>
  );
};

export default CategorySidebar;
