import styled from "styled-components";

const Button = styled.button`
  background: ${({ btnColor }) => btnColor};
  padding: 0.8rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.primary.pink};
  border-radius: 1.5rem;
  color: ${({ textColor }) => textColor};
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    opacity: 0.5;
    transform: scale(0.99);
  }
`;

export default Button;
