import {
  HeroContainer,
  HeroContent,
  HeroStats,
  StatsContainer,
} from "./Hero.styled";
import Button from "../button/Button.styled";
import iconCommunities from "../../images/icon-communities.svg";
import screeMockups from "../../images/screen-mockups.svg";
import iconMessages from "../../images/icon-messages.svg";
import bgTop1 from "../../images/bg-section-top-desktop-1.svg";
import bgMobile from "../../images/bg-section-top-mobile-1.svg";

const Hero = () => {
  return (
    <HeroContainer bgUrl={bgTop1} bgMobile={bgMobile}>
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
        <img src={screeMockups} alt="screen" />
      </HeroContent>
      <HeroContent>
        <HeroStats>
          <StatsContainer>
            <img src={iconCommunities} alt="messages" />
            <h1>1.4k+</h1>
            <p>Communities Formed</p>
          </StatsContainer>
          <StatsContainer>
            <img src={iconMessages} alt="messages" />
            <h1>2.7m+</h1>
            <p>Messages Sent</p>
          </StatsContainer>
        </HeroStats>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
