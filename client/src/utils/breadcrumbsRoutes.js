import { ProductDetailsPage, ProductsPage } from '../containers';

export default [
  { path: '/products', name: 'Products', Component: ProductsPage },
  {
    path: '/products/category/:category',
    name: 'Category',
    Component: ProductsPage,
  },
  { path: '/products/:id', name: 'A Product', Component: ProductDetailsPage },
];
