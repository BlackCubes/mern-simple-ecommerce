import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Breadcrumbs = ({ crumbs, LinkComponent }) => {
  if (crumbs.length < 1) return null;

  return (
    <>
      {crumbs.map(({ name, path }, key) =>
        key + 1 === crumbs.length ? (
          <div key={uuidv4()}>{name}</div>
        ) : (
          <LinkComponent key={uuidv4()} href={path}>
            {name}
          </LinkComponent>
        )
      )}
    </>
  );
};

Breadcrumbs.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    })
  ).isRequired,
  LinkComponent: PropTypes.elementType.isRequired,
};

export default Breadcrumbs;
