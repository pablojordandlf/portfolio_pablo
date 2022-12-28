import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './HobbiesStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { hobbies } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="hobbies">
    <SectionDivider />
    <SectionTitle main>Hobbies</SectionTitle>
    <GridContainer>
      {hobbies.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TagList>
                
              </TagList>
            </div>
            
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;