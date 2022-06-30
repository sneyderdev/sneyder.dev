import { Hero, Footer } from "~/components";

import { Main, Container } from "~/styles/shared";

const HomePage = () => (
  <>
    <Container>
      <Main>
        <Hero />
      </Main>
      <Footer />
    </Container>
  </>
);

export default HomePage;
