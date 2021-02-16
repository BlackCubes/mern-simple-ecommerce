import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Link, Paragraph, SidebarStyled, Small } from '../common';

import { useProductContext } from '../context/ProductContext';

const Sidebar = () => {
  const { categories, getCategory } = useProductContext();

  const handleClick = (selectedCategory) => getCategory(selectedCategory);

  return (
    <SidebarStyled.Sidebar>
      <SidebarStyled.SidebarContainer>
        <SidebarStyled.SidebarFacet>
          <SidebarStyled.SidebarFacetLegend>
            <Paragraph tagtype="strong">Category</Paragraph>
          </SidebarStyled.SidebarFacetLegend>

          <SidebarStyled.SidebarFacetList>
            {categories &&
              categories.map((prop) => (
                <SidebarStyled.SidebarFacetListItem key={uuidv4()}>
                  <Small>
                    <Link
                      href={`#category-${prop}`}
                      rest={{ onClick: handleClick }}
                    >
                      {prop}
                    </Link>
                  </Small>
                </SidebarStyled.SidebarFacetListItem>
              ))}
          </SidebarStyled.SidebarFacetList>
        </SidebarStyled.SidebarFacet>
      </SidebarStyled.SidebarContainer>
    </SidebarStyled.Sidebar>
  );
};

export default Sidebar;
