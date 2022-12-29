import Acomplishments from '../components/Values/Values';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import TestIMG from '../components/BackgrooundAnimation/testimage';

import Hero from '../components/Hero/Hero';
import Projects from '../components/Experience/Experience';
import Technologies from '../components/Skills/Skills';
import Timeline from '../components/Education/Education';
import Hobbies from '../components/Hobbies/Hobbies'
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
        {/*<TestIMG />*/}
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
      <Hobbies />
    </Layout>
  );
};

export default Home;
