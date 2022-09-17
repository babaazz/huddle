import {
  SectionBG,
  SectionContainer,
  SectionPart,
  Image,
  SectionPartContent,
  Bg,
} from "./Section.styled";

import { HeroContent } from "../hero/Hero.styled";
import Button from "../button/Button.styled";

import growIllustration from "../../images/illustration-grow-together.svg";
import flowingConversation from "../../images/illustration-flowing-conversation.svg";
import userIllustration from "../../images/illustration-your-users.svg";

import bgBottom1 from "../../images/bg-section-bottom-desktop-1.svg";
import bgTop2 from "../../images/bg-section-top-desktop-2.svg";
import bgBottom2 from "../../images/bg-section-bottom-desktop-2.svg";
import footerBg from "../../images/bg-footer-top-desktop.svg";

const Section = () => {
  return (
    <>
      <SectionBG bgColor={"hsl(207, 100%, 98%)"} id="section1">
        <SectionContainer id="sec1">
          <SectionPart className="content">
            <SectionPartContent>
              <h1>Grow Together</h1>
              <p>
                Generate meaningful discussions with your audience and build a
                strong, loyal community. Think of the insightful conversations
                you miss out on the feedback form.
              </p>
            </SectionPartContent>
          </SectionPart>
          <SectionPart className="img">
            <Image src={growIllustration} alt="jaj" />
          </SectionPart>
        </SectionContainer>
      </SectionBG>
      <SectionBG
        id="section2"
        bgUrl1={bgBottom1}
        bgUrl2={bgTop2}
        position1={"top"}
        position2={"bottom"}
        bgColor={"#fff"}
      >
        <SectionContainer id="sec2">
          <SectionPart className="img">
            <Image src={flowingConversation} alt="jaj" />
          </SectionPart>
          <SectionPart className="content">
            <SectionPartContent>
              <h1>Flowing Conversation</h1>
              <p>
                You wouldn't paginate a conversation in real life, so why do it
                online? Our threads have just-in-time loading for a more natural
                flow.
              </p>
            </SectionPartContent>
          </SectionPart>
        </SectionContainer>
      </SectionBG>

      <SectionBG bgColor={"hsl(207, 100%, 98%)"} id="section3">
        <SectionContainer id="sec3">
          <SectionPart className="content">
            <SectionPartContent>
              <h1>Your Users</h1>
              <p>
                It takes no time at all to integrate Huddle with your app's
                authentication solution. This means, once signed in to your app,
                your users can start chatting immediately.
              </p>
            </SectionPartContent>
          </SectionPart>
          <SectionPart className="img">
            <Image src={userIllustration} alt="jaj" />
          </SectionPart>
        </SectionContainer>
      </SectionBG>
      <SectionBG
        id="section4"
        bgUrl1={bgBottom2}
        bgUrl2={footerBg}
        position1={"top"}
        position2={"bottom"}
        bgColor={"#fff"}
      >
        <HeroContent>
          <h2>Ready To Build Your Community</h2>
          <Button btnColor="hsl(322, 100%, 66%)" textColor="#fff">
            Get Started For Free
          </Button>
        </HeroContent>
      </SectionBG>
    </>
  );
};

export default Section;
