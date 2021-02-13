import { createContext, useContext } from 'react';

const ProductContext = createContext([]);

export const useProductContext = () => useContext(ProductContext);

export default ProductContext;
