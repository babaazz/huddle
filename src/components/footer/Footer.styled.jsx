import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: hsl(192, 100%, 9%);
  padding: 8rem 0;
`;

export const FooterWrapper = styled.div`
  display: flex;
  width: 80%;
  max-width: 1200px
  gap: 5rem;
  margin: auto;
  background-color: hsl(192, 100%, 9%);
`;

export const FooterContacts = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
  color: #fff;
  .filter-logo {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(231deg)
      brightness(120%) contrast(101%);
  }
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.7;
    width: 60%;
  }
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      font-size: 16px;
      font-weight: 600;
    }
  }
  ul {
    list-style: none;
    display: flex;
    font-size: 2rem;
    gap: 2rem;
  }
`;

export const Newsletter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
  color: #fff;
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.7;
    width: 70%;
  }
  .form {
    width: 100%;
    display: flex;
    gap: 2.5rem;
    input {
      padding: 0.8rem 2rem;
      border: none;
      border-radius: 0.3rem;
      width: 60%;
    }
    button {
      border-radius: 0.3rem;
      padding: 0.8rem 2.5rem;
      font-size: 1rem;
      font-weight: 600;
    }
  }
`;
