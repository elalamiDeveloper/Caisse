import { useState } from 'react';
import styled from 'styled-components';

import { ListButtons, ListProducts, Total } from './components';

import productsData from '../data/Products.json';

const AppContainer = styled.div`
  margin: 5rem;
  height: calc(100vh - 10rem);
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

const products = productsData.slice(0, 10);

const products2 = [
  {
    reference: '430393',
    nom: 'CAMION RAMPE DE LANCEMENT MICRO MOTORZ + 1 VOITURE',
    prix_vente: ' 10,00',
    ean13: '3700994303930',
  },
];

const App = () => {
  const [productsList, setProductsList] = useState(products2);

  const onAddProductsHandler = (newEAN13Product) => {
    const newProduct = productsData.find(
      (product) => product.ean13 === newEAN13Product
    );
    setProductsList((lastValues) => [...lastValues, newProduct]);
  };

  return (
    <AppContainer>
      <ListProducts products={productsList} />
      <ListButtons onAddProductsHandler={onAddProductsHandler} />
      <Total />
    </AppContainer>
  );
};

export default App;
