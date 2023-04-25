import React from 'react'
import { Contain, P, Image } from './Collection'
import { Link } from 'react-router-dom';
import moment from 'moment'

const Post = ({ data }) => {
  const { creator, title, createdAt, _id } = data || []
  return (
    <Link to={`/article/${_id}`}>
      <Contain hoverAnimation cursor={'pointer'} margin={'20px 0 0'}>
        <Contain direction={'column'} justify={'center'} minHeight={'227px'} width={'100%'} border={'1px solid lightgrey'} borderRadius={'5px'} background={'#fff'} padding={'20px'}>
          <Contain margin={'0 0 20px'} height={'50px'}>
            <Image width={'50px'} margin={'0 10px 0 0'} src={creator?.avatar} />
            <Contain direction={'column'} justify={'center'}>
              <Link to={`/profile/${creator?.username}`}><P hoverAnimation weight={500}>{creator?.username}</P></Link>
              <P weight={500}>
                {moment(createdAt).format('MMM D')}
              </P>
            </Contain>
          </Contain>

          <Contain direction={'column'}>
            <P fontSize={24} weight={700} margin={'0 0 20px'}>{title}</P>
            {/* TODO: add selector for tags on article post */}
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