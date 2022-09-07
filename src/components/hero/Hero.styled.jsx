import styled from "styled-components";

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 80%;
  margin: 8rem auto;
  gap: 2.5rem;
  h1 {
    font-size: 3rem;
    font-weight: 700;
  }
  p {
    width: 58%;
    font-size: 1.3rem;
    font-weight: 400;
  }
  button {
    font-size: 1.3rem;
    font-weight: 700;
    padding: 1.5rem 5.5rem;
    border-radius: 3.6rem;
  }
`;

export const HeroStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: auto;
  gap: 10rem;
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  width: 50%;
  text-align: left;
  h1 {
    font-size: 6rem;
  }
  p {
    font-size: 1.5rem;
    opacity: 0.8;
    text-align: center;
  }
`;
