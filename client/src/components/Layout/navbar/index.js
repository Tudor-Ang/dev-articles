import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Logo } from './styles'
import { Contain, Button, Image } from '../../Collection';

import logoutIcon from '../../../assets/icons/logout.png'

const Navbar = ({ logoutHandler, userDetails }) => {
  return (
    <Contain background={'#fff'} borderBottom={'1px solid lightGrey'}>
      <Nav>
        {/*TODO: change placeholder logo */}
        <Link to={'/'}>
          <Logo>
            DevArticles
          </Logo>
        </Link>

        <Contain align={'center'}>
          {userDetails ? (
            <>
              <Link to='/write'>
                <Button border={'1px solid #3B49DF'} color={'#3B49DF'} borderRadius={'7px'} background={'transparent'} padding={'8px 20px 8px 20px'} margin={'0 15px 0 10px'} hoverBackground={'#3B49DF'} hoverColor={'#fff'}>Write</Button>
              </Link>
              <Button onClick={() => logoutHandler()} border={'1px solid #D14D72'} color={'#3B49DF'} borderRadius={'7px'} background={'#FFABAB'} padding={'8px 14px 8px 14px'} margin={'0 15px 0 0'} hoverBackground={'#D14D72'} hoverColor={'#fff'}>
                <Image width={'21px'} src={logoutIcon} />
              </Button>
              <Link to={`/profile/${userDetails?.username}`}>
                <Image width={'40px'} src={userDetails?.avatar} alt={`${userDetails?.username}__avatar`} />
              </Link>
            </>
          ) : (
            <>
              <Link to='/auth/login'>
                <Button borderRadius={'7px'} color={'grey'} background={'transparent'} fontWeight={'300'} hoverBackground={'#EBECFC'} padding={'8px 20px 8px 20px'} hoverColor={'#3B49DF'}>Log in</Button>
              </Link>
              <Link to='/auth/register'>
                <Button border={'1px solid #3B49DF'} color={'#3B49DF'} borderRadius={'7px'} background={'transparent'} padding={'8px 20px 8px 20px'} margin={'0 0 0 10px'} hoverBackground={'#3B49DF'} hoverColor={'#fff'}>Create account</Button>
              </Link>
            </>
          )}
        </Contain>
      </Nav>
    </Contain>
  );
};

export default Navbar;