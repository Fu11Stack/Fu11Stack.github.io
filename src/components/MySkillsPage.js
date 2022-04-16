import React from 'react'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes';
import styled from 'styled-components'
import { Design, Develope } from './AllSvgs';
import LogoComponent from '../SubComponents/LogoComponent';
import SocialIcons from '../SubComponents/SocialIcons';
import PowerButton from '../SubComponents/PowerButton';
import ParticlesComponent from '../SubComponents/ParticalesComponent';
import BigTitlte from '../SubComponents/BigTitlte';


const Box = styled.div`
background-color: ${props => props.theme.body}
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;




`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
max-width: 450px;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};

}


`
const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
  &>*{
      fill:${props => props.theme.body};
  }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Discription = styled.div`
color:${props => props.theme.text};
font-size: calc(0.6 +1vw);
padding: 0.5rem 0;

${Main}:hover &{
  
      color:${props => props.theme.body};
}

strong{
  margin-bottom: 1rem;
  text-transform: uppercase;
}
ul,p {
  margin-left: 2rem;
}
`


const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
    <Box>

<LogoComponent />
<SocialIcons theme='light'/>
<PowerButton />
<ParticlesComponent theme='light' />

    <Main>
<Title>
  <Design width={40} height={40} /> Designer
</Title>
<Discription>
I love to create design which speaks, Keep it clean, minimal and simple.
</Discription>
<Discription>
<strong>I like to Design</strong>
<ul>
  <li>
    Web Design
  </li>
  <li>
    Themes
  </li>
</ul>
</Discription>
<Discription>
<strong>Tools</strong>  
<ul>
    <li>
       Figma
    </li>
    
</ul>
</Discription>

       </Main>
       <Main>
<Title>
  <Develope width={40} height={40} /> Frontend Developer
</Title>
<Discription>
I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
</Discription>
<Discription>
<strong>Skills</strong>
<p>
Html, Css, Js, React, Sass, Bootstrap and expanding beyond!
</p>
</Discription>
<Discription>
<strong>Skills</strong>
<p>
Vscode, Github, Codepen ect.
</p>
</Discription>
       </Main>
    </Box>
    <BigTitlte text='SKILLS' top='5%' left='5%'/>

    </ThemeProvider>

  )
}

export default MySkillsPage