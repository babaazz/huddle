import HeaderContainer from "./Header.styled";
import { ReactComponent as Logo } from "../../images/logo.svg";
import Button from "../button/Button.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Button btnColor={"#fff"} textColor={"hsl(322, 100%, 66%)"}>
        Try It Free
      </Button>
    </HeaderContainer>
  );
};

export default Header;
