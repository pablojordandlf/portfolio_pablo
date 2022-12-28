import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './ValuesStyles';

const data = [
  { value: "Proactivity", text: 'Never settle'},
  { value: "Simplicity", text: 'Be clear to reduce confusion & frustration', },
  { value: "Out of the Box", text: 'think outside of established frameworks', },
  { value: "Work-life balance", text: '"Mens sana in corpore sano"', },
  
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Values</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.value}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
