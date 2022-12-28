import React from 'react';
import { DiFirebase, DiGoogleAnalytics, DiZend } from 'react-icons/di';
import { IoMdRocket } from "react-icons/io";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './SkillsStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I have worked with a range a technologies in the Data world.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiGoogleAnalytics size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Visualization</ListTitle>
          <ListParagraph>
            Experiece with <br />
            PowerBI, Tableau <br />
            and DataStudio
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Management</ListTitle>
          <ListParagraph>
            Expert in Data Quality, <br />
            Data Governance and <br />
            Metadata using several <br />
            tools like Collibra and Atlassian
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <IoMdRocket size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Analysis</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python and SQL mainly <br />
            in GCP environment
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <br />
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
