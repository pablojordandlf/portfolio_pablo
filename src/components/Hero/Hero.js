import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey! I'm <br />
          Pablo Jordán, <br />
        </SectionTitle>

        <SectionText>
        a highly motivated person with passion for data and a desire to make a positive impact on the world. <br />
        I have a wealth of experience working in various companies, which has given me a diverse skill set and valuable insights into the business world. <br />
        I am analytical and detail-oriented, with a strong aptitude for problem-solving and decision-making. <br />
        I have experience extracting insights from data, with a background in data visualization, which allows me to effectively communicate findings to others.

        </SectionText>
        < br />< br />< br />< br />
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;