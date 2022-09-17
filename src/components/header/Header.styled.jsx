import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 90%;
  padding: 5rem 0;
  @media screen and (max-width: 750px) {
    width: 97%;
    padding: 3rem 0;
    .logo {
      width: 150px;
    }
  }
`;

export default HeaderContainer;
