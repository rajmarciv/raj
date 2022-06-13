import React from 'react';
import { DiFirebase, DiReact, DiVisualstudio } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText><br/>
      Front-End: HTML, CSS, Sass, Bootstrap, JavaScript, React, React Hooks, React Router, Redux, Styled Components, Next.js<br/><br/>
      Back-End: Java, Python, C#, C++, C, MySQL, Firebase<br/><br/>
      IDE: Visual Studio Code, IntelliJ IDEA, PyCharm, Visual Studio 2019
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          
            <br />
            React.js/Bootstrap 4
          
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <br />
            Firebase/MySQL/MSSQL/Phpmyadmin
          </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiVisualstudio size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>IDE</ListTitle>
            <br />
            Visual Studio Code
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
