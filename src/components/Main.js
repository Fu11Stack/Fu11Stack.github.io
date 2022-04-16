import React, { useState } from 'react'
import styled from 'styled-components'
import PowerButton from '../SubComponents/PowerButton'
import LogoComponent from '../SubComponents/LogoComponent'
import SocialIcons from '../SubComponents/SocialIcons'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Koi } from './AllSvgs'
import { keyframes } from 'styled-components'
import Intro from './Intro'




const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h2,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`
const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`

const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: 2rem;
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:2;
`
const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 45%;
left: 2rem;
transform: rotate(-90deg) translate(-50%,-50%);
text-decoration: none;
z-index:1;
`
const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`
const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`

const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`
const rotate = keyframes`
  from{
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0);
  }
`

const Center = styled.button`

position: absolute;
top: ${props => props.click ? '94%' : '50%' };
left: ${props => props.click ? '94%' : '50%' };


transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
  animation: ${rotate} infinite 2.5s linear;
}

&>:last-child{
  display: ${props => props.click ? 'none' : 'inline-block' };
  padding-top: 1rem;
}
`
const DarkDiv = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
background-color: #000;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {
  
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <DarkDiv click={click}/>
      <Container>
      <PowerButton />
      <LogoComponent theme={click ? 'dark' : 'light'}/>
      <SocialIcons theme={click ? 'dark' : 'light'}/>
      
      <Center click={click}>
        <Koi onClick={()=> handleClick()} width={click ? 150 : 200} height={click ? 150 : 200} fill='currentColor'/>
        <span><strong>Click Here</strong></span>
      </Center>
      
      <Contact target="_blank" to={{pathname:"Jus10Lopez@yahoo.com"}}>
        <motion.h2  
        initial={{
          y:-200,
          transition: { type:'spring', duration: 1.5, delay:1}
        }}
        animate={{
          y:0,
          transition: { type:'spring', duration: 1.5, delay:1}
        }}
         whileHover={{scale:1.1}}
         whiteTap={{scale: 0.9}}

        >
          <strong>Say hi..</strong>
        </motion.h2>
      </Contact>
      <BLOG to="/blog">
        <motion.h2
        initial={{
          y:-200,
          transition: { type:'spring', duration: 1.5, delay:1}
        }}
        animate={{
          y:0,
          transition: { type:'spring', duration: 1.5, delay:1}
        }}
        whileHover={{scale:1.1}}
        whiteTap={{scale: 0.9}}
        >
          <strong>Blog</strong>
        </motion.h2>
      </BLOG>
      <WORK to="/work" click={click}>
        <motion.h2
          initial={{
            y:-200,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
          animate={{
            y:0,
            transition: { type:'spring', duration: 1.5, delay:1}
          }}
        whileHover={{scale:1.1}}
        whiteTap={{scale: 0.9}}
        >
          <strong>Work</strong>
        </motion.h2>
      </WORK>
      <BottomBar>
      <ABOUT to="/about" click={click}>
          <motion.h2
            initial={{
              y:200,
              transition: { type:'spring', duration: 1.5, delay:1}
            }}
            animate={{
              y:0,
              transition: { type:'spring', duration: 1.5, delay:1}
            }}
          whileHover={{scale:1.1}}
          whiteTap={{scale: 0.9}}
          >
            <strong>About.</strong>
          </motion.h2>
      </ABOUT>
      <SKILLS to="/skills">
          <motion.h2
            initial={{
              y:200,
              transition: { type:'spring', duration: 1.5, delay:1}
            }}
            animate={{
              y:0,
              transition: { type:'spring', duration: 1.5, delay:1}
            }}
          whileHover={{scale:1.1}}
          whiteTap={{scale: 0.9}}
          >
            <strong>My Skills.</strong>
          </motion.h2>
      </SKILLS>
      </BottomBar>
      
      </Container>
      {click ? <Intro click={click}/> : null};
    </MainContainer>

  )
}

export default Main;