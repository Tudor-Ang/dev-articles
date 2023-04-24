import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Wrapper, Contain, P, Image } from '../../components/Collection'
import Post from '../../components/Post'
import { User } from '../../sdk/user.sdk'

const UserProfile = ({ match }) => {
  const [randomColor, setRandomColor] = useState('')
  const [userDetails, setUserDetails] = useState([])

  // TODO: redirect to 404 if we dont have any username
  const { username } = useParams()

  useEffect(() => {
    getUserDetails()
    generateRandomHexCode()
  }, [])

  const getUserDetails = () => {
    User.getUserDetails(username).then((fetchUserDetails) => setUserDetails(fetchUserDetails?.user));
  }


  const generateRandomHexCode = () => {
    const randomInt = Math.floor(Math.random() * 16777216);
    const hexCode = randomInt.toString(16).padStart(6, '0');
    const hexColor = `#${hexCode}`;

    setRandomColor(hexColor)
  }

  return (
    <>
      <Contain background={randomColor} height={'150px'} />
      <Wrapper>
        <Contain padding={'0 20px 20px 20px'} direction={'column'} margin={'-35px 0 0 0'} align={'center'} minHeight={'180px'} background={'#fff'} border={'1px solid lightgrey'} borderRadius={'5px'}>
          <Image background={randomColor} width={'100px'} margin={'-40px 0 0 0'} border={`10px solid ${randomColor}`} borderRadius={'200px'} alt='avatar' src={userDetails?.avatar} />
          <P margin={'15px 0 10px 0'} fontSize={36} weight={800}>{userDetails?.username}</P>
        </Contain>

        <Post />
        <Post />
        <Post />
      </Wrapper>
    </>
  )
}

export default UserProfile;