import React, { useState, useEffect } from 'react'

import { Wrapper, Contain, P } from '../../components/Collection'
import Post from '../../components/Post'

const User = () => {
  const [randomColor, setRandomColor] = useState('')


  const generateRandomHexCode = () => {
    const randomInt = Math.floor(Math.random() * 16777216);
    const hexCode = randomInt.toString(16).padStart(6, '0');
    const hexColor = `#${hexCode}`;

    setRandomColor(hexColor)
  }

  useEffect(() => {
    generateRandomHexCode()
  }, [])



  return (
    <>
      <Contain background={randomColor} height={'150px'} />

      <Wrapper>
        <Contain padding={'0 20px 20px 20px'} direction={'column'} margin={'-35px 0 0 0'} align={'center'} minHeight={'180px'} background={'#fff'} border={'1px solid lightgrey'} borderRadius={'5px'}>
          <Contain height={'100px'} width={'100px'} margin={'-40px 0 0 0'} border={`10px solid ${randomColor}`} borderRadius={'200px'} />
          <P margin={'5px 0 10px 0'} fontSize={26} weight={800}>Erin Bensinger</P>
          <P align={'center'} opacity={'0.7'} fontSize={16}>
            Social Media Manager @ Forem, which powers CodeNewbie and dev.to. Posts, memes, and internet dreams.
          </P>
        </Contain>

        <Post />
        <Post />
        <Post />
      </Wrapper>
    </>
  )
}

export default User