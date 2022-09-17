import styled from "styled-components";

export const HeroContainer = styled.header`
  background-image: url(${({ bgUrl }) => bgUrl});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-bottom: 20rem;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 90%;
  max-width: 1200px;
  margin: 8rem auto 0 auto;
  gap: 2.5rem;
  h1 {
    font-size: 2.6rem;
    font-weight: 700;
  }
  h2 {
    font-size: 2.2rem;
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
  @media screen and (max-width: 750px) {
    h1 {
      font-size: 1.6rem;
    }
    h2 {
      font-size: 1.4rem;
    }
    p {
      font-size: 1.1rem;
      width: 100%;
    }
    button {
      font-size: 1rem;
      font-weight: 700;
      padding: 1rem 4rem;
      border-radius: 2rem;
    }
  }
`;

export const HeroStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;
  gap: 10rem;
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  flex: 1;
  text-align: left;
  h1 {
    font-size: 5rem;
  }
  p {
    font-size: 1.5rem;
    opacity: 0.8;
    width: 100%;
  }
  @media screen and (max-width: 750px) {
    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
`;
