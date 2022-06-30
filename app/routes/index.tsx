import { Hero } from "~/components";

import { Main, Container } from "~/styles/shared";

const HomePage = () => (
  <>
    <Main>
      <Container>
        <Hero />
      </Container>
    </Main>
    <footer>Footer</footer>
  </>
);

export default HomePage;
