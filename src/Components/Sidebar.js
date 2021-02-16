import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Link, Paragraph, SidebarStyled, Small } from '../common';

import { useProductContext } from '../context/ProductContext';

const Sidebar = () => {
  const { categories } = useProductContext();

  return (
    <SidebarStyled.Sidebar>
      <SidebarStyled.SidebarContainer>
        <SidebarStyled.SidebarContent>
          <SidebarStyled.SidebarFacet>
            <SidebarStyled.SidebarFacetLegend>
              <Paragraph tagtype="strong">Category</Paragraph>
            </SidebarStyled.SidebarFacetLegend>

            <SidebarStyled.SidebarFacetList>
              {categories &&
                categories.map((prop) => (
                  <SidebarStyled.SidebarFacetListItem key={uuidv4()}>
                    <Small>
                      <Link href={`/products/category/${prop}`}>{prop}</Link>
                    </Small>
                  </SidebarStyled.SidebarFacetListItem>
                ))}
            </SidebarStyled.SidebarFacetList>
          </SidebarStyled.SidebarFacet>
        </SidebarStyled.SidebarContent>
      </SidebarStyled.SidebarContainer>
    </SidebarStyled.Sidebar>
  );
};

export default Sidebar;
