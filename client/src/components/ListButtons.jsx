import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import productsData from '../../data/Products.json';
import { Btn } from './';

const ListButtonsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  gap: 5rem;
  border-left: 0.1rem solid #333;

  .input-value {
    width: 100%;
    text-align: center;
    padding: 1.5rem;
    border-radius: 0.5rem;
    outline: none;
    border: none;
    background: #f3c214;
    font-size: 2.2rem;
    font-weight: 700;
    border: 0.2rem solid #f75259;

    &:focus   {
      background: #f6f6f6;
      border-color: #f3c214;
    }

    &::placeholder   {
      font-size: 2.2rem;
      color: #f75259;
    }
  }
`;

console.log(productsData);

const ListButtons = ({ onAddProductsHandler }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);

    const SubmitTime = setTimeout(() => onSubmitHandler(e), 200);
    return clearTimeout(SubmitTime);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onAddProductsHandler(inputValue);
    setInputValue('');
  };

  const BtnsValue = ['Ajouter des produits', 'Valider', 'Réinitialiser'];

  return (
    <ListButtonsContainer>
      {BtnsValue.map((btn, i) => (
        <Btn key={i}>{btn}</Btn>
      ))}
      <form onSubmit={onSubmitHandler}>
        <input
          className="input-value"
          type="text"
          value={inputValue}
          name="scannerValue"
          onChange={onChangeHandler}
          ref={inputRef}
          placeholder="Scan Here..."
        />
      </form>
    </ListButtonsContainer>
  );
};

export default ListButtons;
