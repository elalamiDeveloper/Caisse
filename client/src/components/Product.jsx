import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const ProductContainer = styled.li`
  padding: 3rem 6rem;
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  gap: 3rem;
  border-bottom: 0.1rem solid #ccc;

  .number,
  .price {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: 500;
    gap: 0.5rem;

    .arrow-icon {
      font-size: 3rem;
      cursor: pointer;
      transition: 0.3s;
    }

    .arrow-icon:hover {
      transform: scale(1.4);
    }
  }

  .price {
    margin-left: auto;
  }

  .product {
    font-size: 3.2rem;
    font-weight: 600;
    text-transform: lowercase;
  }

  .close-icon {
    font-size: 2.6rem;
    font-weight: 700;
    margin-left: auto;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.4);
    }
  }
`;

const Product = ({ nom, prix_vente, ean13 }) => {
  return (
    <ProductContainer>
      <div className="number">
        <NavigateBeforeIcon className="arrow-icon" />
        <span>5</span>
        <NavigateNextIcon className="arrow-icon" />
      </div>
      <div className="product">{nom}</div>
      <div className="price">{prix_vente} €</div>
      <CloseIcon className="close-icon" />
    </ProductContainer>
  );
};

export default Product;
