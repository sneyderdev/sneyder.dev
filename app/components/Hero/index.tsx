import { HeroContainer, HeroTitle, HeroDescription } from "./Hero.styles";

const Hero = () => (
  <HeroContainer>
    <div>Home img</div>
    <HeroTitle>
      Hi <span>👋🏻</span>, I'm Sneyder Barreto
    </HeroTitle>
    <HeroDescription>Description</HeroDescription>
    <span>Call to action</span>
  </HeroContainer>
);

export default Hero;
