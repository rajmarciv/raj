import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          ERAJIE MARVIC<br />
          
        </SectionTitle>
        <SectionText>
        Barbizon Fashion | Software Engineer JavaScript/React/Bootstrap 4-5/PHP Native/SQL SAP HANA/Phpmyadmin/Wordpress/Joomla
        </SectionText>
        <a href="https://www.facebook.com/radz.marvic.3" target="_blank">
        <Button onClick={props.handleClick}>My Facebook</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
