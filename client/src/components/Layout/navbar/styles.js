import styled from 'styled-components';


export const Nav = styled.div((props) => ({
  maxWidth: '1300px',
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '56px',
  backgroundColor: props.theme.colors.white,
  padding: '0 20px',

  '@media screen and (max-width: 768px)': {
    flexDirection: 'column',
    height: 'auto',
    padding: '10px',
  },
}))

export const Logo = styled.a((props) => ({
  fontSize: props.theme?.toEm(24),
  color: props.theme.colors.main,
  fontWeight: 'bold',
  textDecoration: 'none',
}))




