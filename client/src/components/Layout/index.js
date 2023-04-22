import React from 'react'

import Navbar from './navbar';

const index = ({ Component }) => {
  return (
    <>
      <Navbar />

      <Component />
    </>
  )
}

export default index