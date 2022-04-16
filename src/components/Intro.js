import React from 'react'
import styled from 'styled-components'
import Me from '../assets/Images/Ninja-PNG.png'
import {motion} from 'framer-motion'
import Tilt from 'react-parallax-tilt';


const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 55%;
transform: translate(-50%, -50%);

width: 50vw;
height: auto;
max-width: 500px;

display: flex;


background: linear-gradient(
  to right,
  ${props => props.theme.body} 50%,
  ${props => props.theme.text} 50%) bottom,
  linear-gradient( 
  to right,   
  ${props => props.theme.body} 50%,
  ${props => props.theme.text} 50%) top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  
  border-left: 2px solid ${props => props.theme.body};
  border-right: 2px solid ${props => props.theme.text};

  z-index:1;

`


const SubBox = styled.div`
width: 60%
position: relative;
display: flex;
padding-right: 8em;

.pic{
   position: absolute;
   bottom: 0;
   left: 50%;
   transform: translate(0%,4.0%);
   width: 100%;
   height: auto;
   max-height: 500px;
}
`
const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 1rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
  color: ${props => `rgba(${props.theme.bodyRgba},0.6)` }
  font-size: calc(0.5rem + 1.5vw);
  font-weight: 180;

 

}


`
const Intro = () => {
 return(
  
<Tilt
 className="track-on-window"
 perspective={600}
 glareEnable={true}
 glareMaxOpacity={1.75}
 glarePosition="all"
 scale={1.02}
 transitionSpeed={3500}
 
 tiltMaxAngleX={15} 
 tiltMaxAngleY={15}
 style={{position: 'absolute', top: '50%', right: '50%'}}
 >    
    <Box
    style ={{top: '50%', right: '50%'}}
    initial={{height:0}}
    animate={{height:'50vh'}}
    transition={{type: 'spring',diration:2, delay:1}}
    >

     <SubBox>
      
       <Text>
        <h1> Hi,</h1>
        <h3> I'm Justin Subocz</h3>
        <h6> I enjoy coding simple yet beautiful front end</h6>
       </Text>
      
      </SubBox>
      
      <SubBox>
        
        <motion.div
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{diration:1, delay:1.8}}
        >
        <img className= 'pic' src={Me} alt="Profile pic"/>
        </motion.div>
        
      </SubBox>
      
      
    </Box>
  </Tilt>
     
 )
}

export default Intro;