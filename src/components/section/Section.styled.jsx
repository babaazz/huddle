import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  background: url("${({ background }) => background}");
  margin: auto;
`;

export default SectionContainer;
