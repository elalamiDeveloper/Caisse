import { useState } from 'react';
import styled from 'styled-components';

import { Product } from './';

const ListProductsContainer = styled.ul`
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #d6d6d6;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #f3c214;
    transition: 0.3s;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #caa00a;
  }
`;

const ListProducts = ({
  productsList,
  onRemoveProductsHandler,
  onAddQuantityHandler,
  onReduceQuantityHandler,
}) => {
  return (
    <ListProductsContainer>
      {productsList.map((product) => (
        <Product
          key={product.id}
          {...product}
          onRemoveProductsHandler={onRemoveProductsHandler}
          onAddQuantityHandler={onAddQuantityHandler}
          onReduceQuantityHandler={onReduceQuantityHandler}
        ></Product>
      ))}
    </ListProductsContainer>
  );
};

export default ListProducts;
