import styled from 'styled-components';

const ArticleStyle = styled.div((props) => ({
  'p, ul, ol': {
    fontSize: props.theme?.toEm(18),
    margin: '0 0 25px',
    '@media (max-width: 980px)': {
      fontSize: props.theme?.toEm(14)
    },
  }
}));

export default ArticleStyle