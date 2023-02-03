import { useState, useEffect } from 'react';
import uuid4 from 'uuid4';
import styled from 'styled-components';

import { ListButtons, ListProducts, Total } from './components';

import PRODUCTS_DATA from '../data/caisseData.json';

const AppContainer = styled.div`
  margin: 5rem;
  /* height: calc(100vh - 15rem); */
  background: #f6f6f6;
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 1fr auto;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const App = () => {
  const [productsList, setProductsList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = productsList
      .map((product) => product.prix_vente * product.quantity)
      .reduce((a, b) => a + b, 0);
    setTotal(Math.round(newTotal * 100) / 100);
  }, [productsList]);

  const onAddProductsHandler = (newEAN13Product) => {
    const productWithEAN13 = productsList.find(
      (product) => product.ean13 === newEAN13Product
    );
    if (productWithEAN13) return onAddQuantityHandler(productWithEAN13.id);

    const newId = uuid4();
    const newProduct = {
      id: newId,
      quantity: 1,
      ...PRODUCTS_DATA.find((product) => product.ean13 === newEAN13Product),
    };

    setProductsList((lastProductsList) => [...lastProductsList, newProduct]);
  };

  const onAddQuantityHandler = (productToRemoveID) => {
    const newListProduct = productsList.map((product) => {
      if (product.id === productToRemoveID) {
        product.quantity = product.quantity + 1;
      }
      return product;
    });

    setProductsList(newListProduct);
  };

  const onReduceQuantityHandler = (productToRemoveID) => {
    const newListProduct = productsList.map((product) => {
      if (product.id === productToRemoveID) {
        product.quantity = product.quantity === 1 ? 1 : product.quantity - 1;
      }
      return product;
    });

    setProductsList(newListProduct);
  };

  const onRemoveProductsHandler = (productToRemoveID) => {
    setProductsList((lastProductsList) =>
      lastProductsList.filter((product) => product.id !== productToRemoveID)
    );
  };

  return (
    <AppContainer>
      <ListProducts
        products={productsList}
        onRemoveProductsHandler={onRemoveProductsHandler}
        onAddQuantityHandler={onAddQuantityHandler}
        onReduceQuantityHandler={onReduceQuantityHandler}
      />
      <ListButtons
        onAddProductsHandler={onAddProductsHandler}
        setProductsList={setProductsList}
      />
      <Total total={total} />
    </AppContainer>
  );
};

export default App;
