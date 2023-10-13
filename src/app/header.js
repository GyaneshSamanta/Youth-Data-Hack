'use client'

import {
  Box,
  ChakraProvider,
  Container,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  VStack,
  chakra
} from '@chakra-ui/react'

const HeroSection = () => {
  return (
    <ChakraProvider>
      <Container
        maxW='7xl'
        px={{ base: 6, md: 3 }}
        py={24}
        bg='white'
        mt='40px'
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justifyContent='center'
        >
          <Stack
            direction='column'
            spacing={6}
            justifyContent='center'
            maxW='480px'
          >
            <Text
              fontSize='40px'
              fontWeight={900}
              color='black'
              transition='font-size 0.7s ease'
              _hover={{ fontSize: '52px' }}
              textShadow='3px 3px gray'
              textAlign='center'
              cursor={'pointer'}
            >
              Bullets Over Broadway
            </Text>

            <chakra.h1
              fontSize='26px'
              mt='50px'
              color='teal'
              lineHeight={8}
              fontWeight='bold'
              textAlign='center'
              minW='400px'
            >
              Shedding Light on Youth Gun Violence: Unveiling Trauma and Urgency
              for Change
            </chakra.h1>
            <Text
              fontSize='1rem'
              textAlign='center'
              lineHeight='1.375'
              fontWeight='400'
              color='gray.500'
            >
              Delve into the alarming statistics, racial dynamics and the
              stories behind each bullet. Let&apos;s work towards a safer
              future.
            </Text>
            <VStack
              mb={{ base: '3rem !important', sm: 0 }}
              display='flex'
              justifyContent='center'
              alignItems='center'
              maxH='300px'
              mt='50px'
            >
              <chakra.button
                w={{ base: '100%', sm: 'auto' }}
                h={12}
                px={6}
                color='white'
                size='lg'
                rounded='md'
                mb={{ base: 2, sm: 0 }}
                zIndex={5}
                lineHeight={1}
                bgGradient='linear(to-l, #00d062, #009f65)'
                _hover={{
                  bgGradient: 'linear(to-l, #008040, #006533)',
                  opacity: 0.9,
                }}
                display='flex'
                justifyContent='center'
                alignItems='center'
                onClick={() =>
                  window.open(
                    'https://github.com/GyaneshSamanta/Youth-Data-Hack',
                    '_blank'
                  )
                }
              >
                <Box
                  cursor='pointer'
                  _hover={{ transform: 'scale(1.1)' }}
                  transition='transform 0.5s ease'
                  mr='10px'
                >
                  <Image
                    src={
                      'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                    }
                    alt='GitHub Logo'
                    width={35}
                    height={35}
                    borderRadius={20}
                  />
                </Box>
                <chakra.span> GitHub Repository </chakra.span>
              </chakra.button>
              <Box
                d='flex'
                bgGradient='linear(to-l, orange.300, orange.500)'
                // bg={useColorModeValue('orange.300', 'gray.800')}
                h='50px'
                w={{ base: '100%', sm: 'auto' }}
                mt='30px'
                border='1px solid'
                borderColor='gray.300'
                p={3}
                _hover={{
                  textDecoration: 'none',
                  bgGradient: 'linear(to-l, orange.400, orange.600)',
                }}
                lineHeight={1.18}
                rounded='md'
                boxShadow='md'
                as={Link}
                zIndex={1}
                color='white'
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
                <Box
                  cursor='pointer'
                  _hover={{ transform: 'scale(1.5)' }}
                  transition='transform 0.5s ease'
                >
                  <Image
                    src={
                      'https://cdn.icon-icons.com/icons2/2667/PNG/512/jupyter_app_icon_161280.png'
                    }
                    alt='Jupyter Logo'
                    width={39}
                    height={39}
                    style={{ borderRadius: '5px' }}
                  />
                </Box>
                Jupyter Notebook
              </Box>
            </VStack>
          </Stack>
          <Box ml={{ base: 0, md: 5 }} pos='relative'>
            <Image
              w='100%'
              h='100%'
              minW={{ base: 'auto', md: '30rem' }}
              objectFit='cover'
              src={
                'https://www.telegraph.co.uk/content/dam/travel/2021/09/28/TELEMMGLPICT000272822890_trans_NvBQzQNjv4BqgsaO8O78rhmZrDxTlQBjdLdu0TL-Cg_AMOUqySXmFgU.jpeg'
              }
              alt='hero'
              borderRadius='20px'
              fallback={<Skeleton />}
            />
          </Box>
        </Stack>
      </Container>
    </ChakraProvider>
  )
}

export default HeroSection
