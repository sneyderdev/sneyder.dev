import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import {
  HeroContainer,
  HeroTitle,
  HeroDescription,
  HeroCTA,
} from "./Hero.styles";

const Hero = () => (
  <HeroContainer>
    <div>Home img</div>
    <HeroTitle>
      Hi <span>👋🏻</span>!<br />
      I'm Sneyder
    </HeroTitle>
    <HeroDescription>
      Frontend developer 👨🏻‍💻 building apps with TypeScript and React.
    </HeroDescription>
    <HeroCTA to="/portfolio">
      <span>Check out my work here</span>{" "}
      <FontAwesomeIcon icon={faArrowRight} />
    </HeroCTA>
  </HeroContainer>
);

export default Hero;
