import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div(({ margin, maxWidth }) => ({
  width: maxWidth,
  ...margin && { margin: margin },
}));

const InputField = styled.input(({ theme }) => ({
  height: '40px',
  width: '100%',
  outline: 'none',
  marginTop: '7px',
  fontSize: theme.toEm(14),
  fontWeight: 400,
  borderRadius: '4px',
  transition: 'all 0.3s ease-out',
  padding: '0 14px',
  border: '1px solid lightgrey',
  '&:hover, &:focus': {
    border: `1px solid grey`,
  },
}));

const Input = (props) => {
  const { label, width, margin, maxWidth } = props;
  return (
    <InputContainer margin={margin} width={width} maxWidth={maxWidth} >
      <label>{label}</label>
      <InputField {...props} />
    </InputContainer>
  );
};

export default Input;