import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import {
  BreadcrumbsContainerStyled,
  BreadcrumbsStyled,
  BreadcrumbsListStyled,
  BreadcrumbsListItemStyled,
  Link,
} from '../common';
import { Small } from '../common/Typography';

const Breadcrumbs = ({ crumbs }) => {
  if (crumbs.length < 1) return null;

  return (
    <BreadcrumbsContainerStyled>
      <BreadcrumbsStyled>
        <BreadcrumbsListStyled>
          {crumbs.map(({ name, path }, key) =>
            key + 1 === crumbs.length ? (
              <BreadcrumbsListItemStyled key={uuidv4()}>
                <Small>{name}</Small>
              </BreadcrumbsListItemStyled>
            ) : (
              <BreadcrumbsListItemStyled key={uuidv4()}>
                <Small>
                  <Link href={path}>{name}</Link>
                </Small>
              </BreadcrumbsListItemStyled>
            )
          )}
        </BreadcrumbsListStyled>
      </BreadcrumbsStyled>
    </BreadcrumbsContainerStyled>
  );
};

Breadcrumbs.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    })
  ).isRequired,
};

export default Breadcrumbs;
