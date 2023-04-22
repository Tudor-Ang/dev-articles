import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Logo } from './styles'
import { Contain, Button } from '../../Collection';


const Navbar = () => {
  return (
    <Contain background={'#fff'} borderBottom={'1px solid lightGrey'}>
      <Nav>
        {/*TODO: change placeholder logo */}
        <Logo>Logo</Logo>
        <Contain>
          <Link to="/auth/login">
            <Button borderRadius={'7px'} color={'grey'} background={'transparent'} fontWeight={'300'} hoverBackground={'#EBECFC'} padding={'8px 20px 8px 20px'} hoverColor={'#3B49DF'}>Log in</Button>
          </Link>
          <Link to="/auth/register">
            <Button border={'1px solid #3B49DF'} color={'#3B49DF'} borderRadius={'7px'} background={'transparent'} padding={'8px 20px 8px 20px'} margin={'0 0 0 10px'} hoverBackground={'#3B49DF'} hoverColor={"#fff"}>Create account</Button>
          </Link>
        </Contain>
      </Nav>
    </Contain>
  );
};

export default Navbar;