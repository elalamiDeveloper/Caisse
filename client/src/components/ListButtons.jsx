import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

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

const BtnsValue = ['Valider', 'Clic pour Scanner'];

const ListButtons = ({ onAddProductsHandler, setProductsList }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onScanneHandler = (e) => {
    inputRef.current.focus();
  };

  const onReinitialisationHandler = (e) => {
    setProductsList([]);
    inputRef.current.focus();
  };

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

  return (
    <ListButtonsContainer>
      {BtnsValue.map((btn, i) => (
        <Btn
          key={i}
          onClick={i === 1 ? onScanneHandler : onReinitialisationHandler}
        >
          {btn}
        </Btn>
      ))}

      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          ref={inputRef}
          name="scannerValue"
          value={inputValue}
          placeholder="Scan ici..."
          className="input-value"
          onChange={onChangeHandler}
        />
      </form>
    </ListButtonsContainer>
  );
};

export default ListButtons;
