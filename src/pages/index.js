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

import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>
          Pablo Jordán's porfolio, get to know me!
        </title>
        <meta property="og:url" content="https://portfolio-pablo-jordan.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="linkedin:card" content = "Pablo Jordán's porfolio"/>
        <meta
          property="og:title"
          content="Pablo Jordán's porfolio, get to know me!"
        />
        <meta
          property="og:description"
          content="Hey! I'm Pablo Jordán, welcome to my portfolio, get to know me! "
        />
        <meta property="og:image" content={" https://firebasestorage.googleapis.com/v0/b/portfolio-pablojordan.appspot.com/o/meta.jpg?alt=media&token=3e9d5e0c-051d-4f8b-ae7e-dac7a3b15b05 "} />
        
      </Head>

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
    </div>
  );
};

export default Home;
