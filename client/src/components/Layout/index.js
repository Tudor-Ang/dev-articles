import React from 'react'

import Navbar from './navbar';

const index = ({ Component, name }) => {
  return (
    <div>

      <Navbar />

      <Component />
    </div>
  )
}

export default index