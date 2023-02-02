import styled from 'styled-components';

const TotalContainer = styled.div`
  grid-column: 1/-1;
  padding: 2.5rem 5rem;
  font-size: 3.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.1rem solid #333;

  strong {
    font-size: 5rem;
  }
`;

const Total = () => {
  return (
    <TotalContainer>
      <h2>Total:</h2>
      <strong>200 €</strong>
    </TotalContainer>
  );
};

export default Total;
