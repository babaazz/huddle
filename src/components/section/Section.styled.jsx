import styled from "styled-components";

export const SectionBG = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ bgColor }) => bgColor};
  background-image: url(${({ bgUrl1 }) => bgUrl1}),
    url(${({ bgUrl2 }) => bgUrl2});
  background-position: ${({ position1 }) => position1},
    ${({ position2 }) => position2};
  background-repeat: no-repeat, no-repeat;
  background-size: 100%, 100%;
  &#section2 {
    padding: 18rem 0;
  }
  &#section4 {
    padding: 12rem 0 20rem 0;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  width: 80%;
  max-width: 1200px;
  margin: auto;
`;

export const SectionPart = styled.div`
  text-align: left;
  width: 50%;
`;

export const SectionPartContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  gap: 1rem;
  p {
    font-size: 1rem;
    width: 88%;
  }
  h1 {
    font-weight: 700;
    font-size: 2.7rem;
  }
`;

export const Image = styled.img`
 width: 100%
 height: auto;
`;
