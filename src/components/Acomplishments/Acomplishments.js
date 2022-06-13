import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2022, text: 'Software Engineer'},
  { number: 2021, text: 'IT/Submission Officer'},
  { number: 2020, text: 'IT Staff'},
  { number: 2019, text: 'Corporate Admin Clerk'},
  { number: 2018, text: 'Equipment/Admin Clerk'},
  { number: 2017, text: 'Equipment Clerk'},
  { number: 2016, text: 'Trainee / On The Job Training(OJT)'}
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Work Experienced</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
