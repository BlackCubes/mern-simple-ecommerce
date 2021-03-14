import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Link } from '../common';

import {
  SidebarStyled,
  SidebarContainerStyled,
  SidebarContentStyled,
  SidebarFacetStyled,
  SidebarFacetLegendStyled,
  SidebarFacetListStyled,
  SidebarFacetListItemStyled,
} from '../common/Sidebar';

import { Paragraph, Small } from '../common/Typography';

import { useProductContext } from '../context/ProductContext';

const Sidebar = () => {
  const { categories } = useProductContext();

  return (
    <SidebarStyled>
      <SidebarContainerStyled>
        <SidebarContentStyled>
          <SidebarFacetStyled>
            <SidebarFacetLegendStyled>
              <Paragraph tagtype="strong">Category</Paragraph>
            </SidebarFacetLegendStyled>

            <SidebarFacetListStyled>
              {categories &&
                categories.map((prop) => (
                  <SidebarFacetListItemStyled key={uuidv4()}>
                    <Small>
                      <Link href={`/products/category/${prop}`}>{prop}</Link>
                    </Small>
                  </SidebarFacetListItemStyled>
                ))}
            </SidebarFacetListStyled>
          </SidebarFacetStyled>
        </SidebarContentStyled>
      </SidebarContainerStyled>
    </SidebarStyled>
  );
};

export default Sidebar;
