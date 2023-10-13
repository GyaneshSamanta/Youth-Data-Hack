import * as React from 'react'
import {Stack, Box, Text, VStack } from '@chakra-ui/react'

const ToggleRow = ({ activeText, setActiveText }) => {
  const texts = ['Images', 'Maps']

  const handleToggle = (text) => {
    setActiveText(text)
    window.scrollTo({
      top: 800,
      behavior: 'smooth', // Add smooth scrolling effect
    })
  }

  return (
    <VStack
      maxW='6xl'
      // px={{ base: 6, md: 3 }}
      py={4}
      mt='80px'
      bg='white'
      color='white'
    >
      <Stack direction='row' spacing={4} justifyContent='center'>
        <Box
          display='flex'
          flexDirection='row'
          borderRadius='20px'
          border='1px solid black'
          overflow='hidden'
          mt='-35px'
        >
          {texts.map((text, index) => (
            <Box
              key={index}
              width='200px'
              height='50px'
              display='flex'
              justifyContent='center'
              alignItems='center'
              cursor='pointer'
              borderRadius='12px'
              margin='10px'
              onClick={() => handleToggle(text)}
              backgroundColor={activeText === text ? '#00d062' : 'transparent'}
              color={activeText === text ? 'black' : 'black'}
              fontWeight={700}
            >
              <Text>{text}</Text>
            </Box>
          ))}
        </Box>
      </Stack>
    </VStack>
  )
}

export default ToggleRow
