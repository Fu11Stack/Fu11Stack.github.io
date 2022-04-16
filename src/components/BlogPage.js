import React from 'react'
import styled from 'styled-components'

import img from "../assets/Images/blogbg.jpg"
import LogoComponent from '../SubComponents/LogoComponent'
import PowerButton from '../SubComponents/PowerButton'
import SocialIcons from '../SubComponents/SocialIcons'
import { Blogs } from '../data/BlogData';
import BlogComponent from './BlogComponent'
import AnchorComponent  from '../SubComponents/Anchor'
import { useEffect, useState } from 'react'
import BigTitlte from '../SubComponents/BigTitlte'
import {motion} from 'framer-motion'



const MainContainer = styled(motion.div)`
background-image: url(${img}) ;
background-size: cover;
background-repeat: no repeat;
background-attachment: fixed;
background-position: center;

`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height: auto;

position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`
const container ={

  hidden: {opacity: 0},
  show: {
    opacity: 1,

    transition:{
      staggerChildren:0.5,
      diration: 0.5,
    }
  }
}


const BlogPage = () => {
  
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70)/35;
    setNumbers(parseInt(num));
  }, [])


  return (

  <MainContainer
  variants={container}
  initial='hidden'
  animate='show'
  exit={{
    opacity:0, transition:{duration: 0.5}
  }}
  >
      <Container>
          <LogoComponent />
          <PowerButton />
          <SocialIcons />
          <AnchorComponent number={numbers}/>
          
          <Center>
          <Grid>

           {
             Blogs.map(blog => {
             return <BlogComponent key={blog.id} blog={blog} />
             })
           }
          </Grid>  
          </Center>
          <BigTitlte text='BLOG' top='5%' left='5%'/>

      </Container>
  </MainContainer>

  )
}

export default BlogPage