import styled from 'styled-components';

const ListPromoContainer = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  font-size: 2.2rem;
  gap: 2rem;
  border-top: 0.1rem solid #333;

  li {
    text-align: center;
    color: #f3c214;

    .promo-content {
      font-size: 2.2rem;
      color: #333;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 1400px) {
    border-left: 0.1rem solid #333;
    border-top: none;
  }
`;

const ListPromo = () => {
  const listPromo = [
    '1 acheté = 1 Gratuit',
    '2 Pour 15 €',
    '2 Pour 5 €',
    'Cadeau',
    '5 € le 2 eme',
  ];

  return (
    <ListPromoContainer>
      {listPromo.map((promo, i) => (
        <li key={i}>
          <span>{`PROMO ${i + 1}`}</span>
          <br /> <span className="promo-content">{promo}</span>
        </li>
      ))}
    </ListPromoContainer>
  );
};

export default ListPromo;
