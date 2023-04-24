import React from 'react'
import { Contain, P } from './Collection'
import { Link } from 'react-router-dom';

const Post = () => {
  return (
    <Link to={'/article/dkwakdka'}>
      <Contain hoverAnimation cursor={'pointer'} margin={'20px 0 0'}>
        <Contain direction={'column'} justify={'center'} minHeight={'227px'} width={'100%'} border={'1px solid lightgrey'} borderRadius={'5px'} background={'#fff'} padding={'20px'}>
          <Contain margin={'0 0 20px'} height={'50px'}>
            <Contain border={'1px solid red'} width={'50px'} height={'50px'} borderRadius={'200px'} margin={'0 10px 0 0'}></Contain>
            <Contain direction={'column'} justify={'center'}>
              <Link to={'/profile/jonSnow'}><P weight={500}>Jon Snow</P></Link>
              <P weight={500}>Apr 22</P>
            </Contain>
          </Contain>

          <Contain direction={'column'}>
            <P fontSize={24} weight={700} margin={'0 0 20px'}>10 Popular Programming Languages to Learn in 2023: Python, JavaScript, Java, C#, Kotlin... </P>
            <Contain flexWrap={'wrap'}>
              <P margin={'0 10px 0 0'} opacity={'0.6'} fontSize={12}>#webdev</P>
              <P margin={'0 10px 0 0'} opacity={'0.6'} fontSize={12}>#beginners</P>
              <P margin={'0 10px 0 0'} opacity={'0.6'} fontSize={12}>#programming</P>
              <P margin={'0 10px 0 0'} opacity={'0.6'} fontSize={12}>#javascript</P>
            </Contain>
          </Contain>

        </Contain>
      </Contain>
    </Link>

  )
}

export default Post