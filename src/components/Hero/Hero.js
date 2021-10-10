import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';



const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          "Always go forward whatever it takes" - this is my moto and I strive to become part of something that changes the world. Currently 
          working in the banking IT industry making a banking software for the USA
        </SectionText>
        <Button onClick={() => window.location = 'https://www.facebook.com/niolai.nanov/'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);
export default Hero;