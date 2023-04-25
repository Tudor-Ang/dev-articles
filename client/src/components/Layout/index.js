import React, { useEffect } from 'react';
import { User } from '../../sdk/user.sdk';
import Navbar from './navbar';

const Layout = ({ Component, name }) => {
  const userDetails = JSON.parse(localStorage.getItem('user'))

  // TODO: fix sending multiple reqs
  // TODO: move to redux
  useEffect(() => {
    if (name !== 'Login' && name !== 'Register') {
      if (localStorage.getItem('apiToken') === null || localStorage.getItem('user') === null) {
        localStorage.clear();
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
    <>
      {/* TODO: display loading screen until we check the token */}
      <Navbar logoutHandler={logOut} userDetails={userDetails} />

      <Component userDetails={userDetails} />
    </>
  )
}

export default Layout