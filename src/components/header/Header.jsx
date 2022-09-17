import HeaderContainer from "./Header.styled";
import Logo from "../../images/logo.svg";
import Button from "../button/Button.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <Button btnColor={"#fff"} textColor={"hsl(322, 100%, 66%)"}>
        Try It Free
      </Button>
    </HeaderContainer>
  );
};

export default Header;
