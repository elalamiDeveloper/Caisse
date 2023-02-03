import styled from 'styled-components';

const BtnContainer = styled.button`
  padding: 1.5rem 3rem;
  font-size: 2.2rem;
  background: #f75259;
  border-radius: 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const Btn = ({ children, onClick }) => {
  return <BtnContainer onClick={onClick}>{children}</BtnContainer>;
};

export default Btn;
