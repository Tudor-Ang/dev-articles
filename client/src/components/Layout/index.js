import React, { useEffect } from 'react';
import { User } from '../../sdk/user.sdk';
import Navbar from './navbar';
import ScrollToTop from "react-scroll-to-top";
// import { Navigate } from "react-router-dom";

const Layout = ({ name, children }) => {
  const userDetails = localStorage.getItem('user')
  // TODO: move to redux
  useEffect(() => {
    if (name !== 'Login' && name !== 'Register') {
      if (localStorage.getItem('apiToken') === null || localStorage.getItem('user') === null) {
        localStorage.clear();
        // TODO: use react navigate <Navigate to={'/auth/login'} replace={true} />
        window.location.href = '/auth/login';
      }
      checkToken();
    }
  }, []);

  const logOut = async () => {
    await User.logout(localStorage.getItem('apiToken'))
    localStorage.removeItem('apiToken')
    localStorage.removeItem('user')
    window.location.href = '/auth/login';
  }

  const checkToken = async () => {
    const res = await User.getUserByToken(localStorage.getItem('apiToken'));
    if (!res || !res.success) {
      localStorage.clear();
      window.location.href = '/auth/login';
    }
  }

  return (
    <div key={name}>
      {/* TODO: display loading screen until we check the token */}
      <Navbar logoutHandler={logOut} userDetails={JSON.parse(userDetails)} />
      {children}
      <ScrollToTop width='30px' height='30px' color={'#3B49DF'} smooth />
    </div>
  )
}

export default Layout