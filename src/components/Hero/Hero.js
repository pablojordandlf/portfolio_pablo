import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Pablo Jordán <br />
        </SectionTitle>

        <SectionText>
        "The impact you have on the world is not determined by your talents or abilities, but rather by the choices you make and the actions you take. Never give up on the things that truly matter to you, because every moment of your life has the power to shape the world around you in ways you could never have imagined." <br />
        ChatGPT
        
        </SectionText>
        < br />< br />< br />< br />< br />< br />
        
        
        
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;