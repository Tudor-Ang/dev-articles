import React from 'react'

import { Wrapper, Contain, P } from '../../components/Collection'

const index = () => {
  return (
    <Wrapper>
      <Contain height={'90vh'} align={'center'} justify={'center'}>
        <P weight={'bold'} fontSize={120}>404 :(</P>
      </Contain>
    </Wrapper>
  )
}

export default index