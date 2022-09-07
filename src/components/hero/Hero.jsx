import { HeroContent, HeroStats, StatsContainer } from "./Hero.styled";
import Button from "../button/Button.styled";
import { ReactComponent as ScreenMoc } from "../../images/screen-mockups.svg";
import { ReactComponent as MessagesSVG } from "../../images/icon-messages.svg";

const Hero = () => {
  return (
    <>
      <HeroContent>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion
        </p>
        <Button btnColor="hsl(322, 100%, 66%)" textColor="#fff">
          Get Started For Free
        </Button>
      </HeroContent>
      <HeroContent>
        <ScreenMoc />
      </HeroContent>
      <HeroContent>
        <HeroStats>
          <StatsContainer>
            <MessagesSVG />
            <h1>1.4k+</h1>
            <p>Communities Formed</p>
          </StatsContainer>
          <StatsContainer>
            <MessagesSVG />
            <h1>2.7m+</h1>
            <p>Messages Sent</p>
          </StatsContainer>
        </HeroStats>
      </HeroContent>
    </>
  );
};

export default Hero;
