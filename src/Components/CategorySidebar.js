import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  CategorySidebarStyled,
  Image,
  Link,
  Paragraph,
  SidebarStyled,
} from '../common';

import { useProductContext } from '../context/ProductContext';

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
    <SidebarStyled.Sidebar>
      <SidebarStyled.SidebarContainer>
        <CategorySidebarStyled.CategorySidebar>
          <CategorySidebarStyled.CategorySidebarHeader>
            <Paragraph tagtype="strong">Similar Category</Paragraph>
          </CategorySidebarStyled.CategorySidebarHeader>

          {similarProducts &&
            similarProducts.slice(0, 4).map((prop) => (
              <CategorySidebarStyled.CategorySidebarCard key={prop.id}>
                <CategorySidebarStyled.CategorySidebarCardImage>
                  <RouterLink to={`/products/${prop.id}`}>
                    <Image rest={{ src: prop.image, alt: prop.title }} />
                  </RouterLink>
                </CategorySidebarStyled.CategorySidebarCardImage>

                <CategorySidebarStyled.CategorySidebarCardInfo>
                  <CategorySidebarStyled.CategorySidebarCardInfoTitle>
                    <Paragraph>
                      <Link href={`/products/${prop.id}`}>{prop.title}</Link>
                    </Paragraph>
                  </CategorySidebarStyled.CategorySidebarCardInfoTitle>

                  <CategorySidebarStyled.CategorySidebarCardInfoPrice>
                    <Paragraph tagtype="strong">{prop.price}</Paragraph>
                  </CategorySidebarStyled.CategorySidebarCardInfoPrice>
                </CategorySidebarStyled.CategorySidebarCardInfo>
              </CategorySidebarStyled.CategorySidebarCard>
            ))}
        </CategorySidebarStyled.CategorySidebar>
      </SidebarStyled.SidebarContainer>
    </SidebarStyled.Sidebar>
  );
};

export default CategorySidebar;
