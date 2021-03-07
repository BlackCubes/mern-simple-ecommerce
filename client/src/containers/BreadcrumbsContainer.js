// import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';

// import { Breadcrumbs } from '../Components';

import { breadcrumbsRoutes } from '../utils';

const BreadcrumbsContainer = () => {
  const location = useLocation();

  const crumbs = breadcrumbsRoutes
    .filter(({ path }) => location.pathname.includes(path))
    .map(({ path, ...rest }) => ({
      path: Object.keys(useParams()).length
        ? Object.keys(useParams()).reduce(
            (routerPath, routerParams) =>
              routerPath.replace(`:${routerParams}`, useParams()[routerParams]),
            path
          )
        : path,
      ...rest,
    }));

  return console.log(crumbs);
};

export default BreadcrumbsContainer;
