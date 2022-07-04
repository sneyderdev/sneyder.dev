import { HeroContainer, HeroTitle, HeroDescription } from "./Hero.styles";

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
    <span>Check out my work here</span>
  </HeroContainer>
);

export default Hero;
