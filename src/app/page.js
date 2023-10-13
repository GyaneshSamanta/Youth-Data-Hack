'use client'
import { Box, Center, Container, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import Img1 from '../../public/images/Graphs/img1.png'
import Img10 from '../../public/images/Graphs/img10.png'
import Img11 from '../../public/images/Graphs/img11.png'
import Img12 from '../../public/images/Graphs/img12.png'
import Img2 from '../../public/images/Graphs/img2.png'
import Img3 from '../../public/images/Graphs/img3.png'
import Img4 from '../../public/images/Graphs/img4.png'
import Img5 from '../../public/images/Graphs/img5.png'
import Img6 from '../../public/images/Graphs/img6.png'
import Img7 from '../../public/images/Graphs/img7.png'
import Img8 from '../../public/images/Graphs/img8.png'
import Img9 from '../../public/images/Graphs/img9.png'
import Img13 from '../../public/images/Graphs/img13.png'
import Img14 from '../../public/images/Graphs/img14.png'
import Img15 from '../../public/images/Graphs/img15.png'
import Img16 from '../../public/images/Graphs/img16.png'
import Map1 from '../../public/images/Graphs/map1.png'
import Map2 from '../../public/images/Graphs/map2.png'
import Header from './header'
import Toggle from './toggleRow'
import './globals.css'

export default function Home() {
  const [activeText, setActiveText] = useState('Images')

  const imageData = [
    {
      src: Img1,
      alt: 'img1',
      marginBottom: '100px',
      borderRadius: '15px',
      title: 'Shootings by Borough',
    },
    {
      src: Img2,
      alt: 'img2',
      marginBottom: '100px',
      borderRadius: '15px',
      title: 'Shootings over Time (Monthly)',
    },
    {
      src: Img3,
      alt: 'img3',
      marginBottom: '100px',
      borderRadius: '15px',
      title: 'Shootings by Perpetrator Age Group',
    },
    {
      src: Img4,
      alt: 'img4',
      marginBottom: '100px',
      borderRadius: '15px',
      title: 'Shootings by Perpetrator - Gender & Race',
    },
    {
      src: Img5,
      alt: 'img5',
      marginBottom: '100px',
      borderRadius: '15px',
      title: 'Shootings by Victim - Age Group, Gender & Race',
    },
    {
      src: Img6,
      alt: 'img6',
      marginBottom: '100px',
      borderRadius: '15px',
      title: 'Proportion of Shootings Resulting in Murder',
    },
    {
      src: Img7,
      alt: 'img7',
      marginBottom: '100px',
      borderRadius: '15px',
      title: 'Race Relation Table',
    },
    {
      src: Img8,
      alt: 'img8',
      marginBottom: '100px',
      borderRadius: '15px',
      title: 'Age Relation Table',
    },
    {
      src: Img9,
      alt: 'img9',
      marginBottom: '100px',
      borderRadius: '15px',
      title: 'Shootings by Time of Day',
    },
    {
      src: Img10,
      alt: 'img10',
      marginBottom: '100px',
      borderRadius: '15px',
      title: 'Shootings by Day of the Week',
    },
    {
      src: Img11,
      alt: 'img11',
      marginBottom: '100px',
      borderRadius: '15px',
      title: 'Top 10 Precincts with Highest Number of Shootings',
    },
    {
      src: Img13,
      alt: 'img13',
      marginBottom: '100px',
      borderRadius: '15px',
      title: 'Distribution of Shootings by Borough and Murder Outcome',
    },
    {
      src: Img14,
      alt: 'img14',
      marginBottom: '100px',
      borderRadius: '15px',
      title: 'Distribution of Shootings by Perpetrator Age and Murder Outcome',
    },
    {
      src: Img15,
      alt: 'img15',
      marginBottom: '100px',
      borderRadius: '15px',
      title: 'Distribution of Shootings by Perpetrator Race and Murder Outcome',
    },
    {
      src: Img16,
      alt: 'img16',
      marginBottom: '100px',
      borderRadius: '15px',
      title: 'Distribution of Shootings by Time of Day and Murder Outcome',
    },
    {
      src: Img12,
      alt: 'img12',
      marginBottom: '100px',
      borderRadius: '15px',
      title: 'Elbow Method for Optimal Number of Clusters',
    },
  ]

  const mapData = [
    {
      src: Map1,
      alt: 'map1',
      marginBottom: '50px',
      borderRadius: '15px',
      title: 'Shootings by Precinct',
    },
    {
      src: Map2,
      alt: 'map2',
      marginBottom: '-50px',
      borderRadius: '15px',
      title: 'Shootings Heat Map',
    },
  ]

  useEffect(() => {
    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  })

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector('.header-section')
    const scrollTop = window.scrollY
    scrollTop >= 1040
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky')
  }

  return (
    <div style={{ backgroundColor: 'white' }}>
      <Center minH='100vh'>
        <Container
          mt='-50px'
          maxW='75vw'
          px={{ base: 6, md: 3 }}
          py={24}
          minH='100vh'
          // bg='white'
          color='white'
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <VStack spacing={5}>
            <Header />
            <Text
              fontSize={40}
              textShadow='1px 1px gray'
              fontWeight={700}
              color='black'
              mt='100px'
              textAlign='center'
            >
              Data from Our Analysis
            </Text>
            <header className='header-section'>
              <Toggle activeText={activeText} setActiveText={setActiveText} />
            </header>
            <Box>
              <Container maxW='800px' overflow='hidden'>
                {activeText === 'Images' &&
                  imageData.map((data, index) => (
                    <Fragment key={index}>
                      <Text
                        mt='100px'
                        fontSize={32}
                        color='black'
                        textAlign='center'
                        textShadow='1px 1px gray'
                      >
                        {data?.title}
                      </Text>
                      <Image
                        src={data.src}
                        alt={data.alt}
                        layout='responsive'
                        width={1200}
                        height={800}
                        style={{
                          marginBottom: data.marginBottom,
                          marginTop: `${!data.title ? '100px' : '40px'}`,
                          borderRadius: '15px',
                        }}
                      />
                      <Text
                        color='gray'
                        textAlign='center'
                        textShadow='1px 1px gray'
                      >
                        ___________________________________________
                        ___________________________________________
                      </Text>
                    </Fragment>
                  ))}
                {activeText === 'Maps' &&
                  mapData.map((data, index) => (
                    <Fragment key={index}>
                      <Text
                        mt={`${index === 0 ? '150px' : '100px'}`}
                        fontSize={32}
                        color='black'
                        textAlign='center'
                        textShadow='1px 1px gray'
                      >
                        {data?.title}
                      </Text>
                      <Image
                        src={data.src}
                        alt={data.alt}
                        layout='responsive'
                        width={1200}
                        height={800}
                        style={{
                          marginBottom: data.marginBottom,
                          marginTop: '40px',
                          borderRadius: '15px',
                        }}
                      />
                      <Text
                        color='gray'
                        textAlign='center'
                        textShadow='1px 1px gray'
                        mt='100px'
                      >
                        ___________________________________________
                        ___________________________________________
                      </Text>
                    </Fragment>
                  ))}
                {activeText === 'Maps' && (
                  <Box
                    mt='75px'
                    mb='30px'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    onClick={() =>
                      window.open(
                        'https://github.com/GyaneshSamanta/Youth-Data-Hack/blob/main/notebook.ipynb',
                        '_blank'
                      )
                    }
                  >
                    <button class='button-50' role='button'>
                      Interactive Maps
                    </button>
                  </Box>
                )}
              </Container>
            </Box>
          </VStack>
        </Container>
      </Center>
    </div>
  )
}