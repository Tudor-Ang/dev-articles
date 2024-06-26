import styled from 'styled-components';

export const Wrapper = styled.div((props) => ({
  maxWidth: '1300px',
  margin: '0 auto',
  padding: '0 20px 20px',

  '@media screen and(max - width: 768px)': {
    padding: '0 10px',
  },
  '@media screen and(max - width: 480px)': {
    padding: '0 5px',
  },
}))


export const Contain = styled.div((props) => ({
  display: props.display ? props.display : 'flex',
  ...(props.position && { position: props.position }),
  ...(props.top && { top: props.top }),
  ...(props.bottom && { bottom: props.bottom }),
  ...(props.right && { right: props.right }),
  ...(props.left && { left: props.left }),
  ...(props.direction && { flexDirection: props.direction }),
  ...(props.align && { alignItems: props.align }),
  ...(props.justify && { justifyContent: props.justify }),
  ...(props.width && { width: props.width }),
  ...(props.fontWeight && { fontWeight: props.fontWeight }),
  ...(props.color && { color: props.color }),
  ...(props.maxWidth && { maxWidth: props.maxWidth }),
  ...(props.minWidth && { minWidth: props.minWidth }),
  ...(props.minHeight && { minHeight: props.minHeight }),
  ...(props.maxHeight && { maxHeight: props.maxHeight }),
  ...(props.height && { height: props.height }),
  ...(props.padding && { padding: props.padding }),
  ...(props.paddingBottom && { paddingBottom: props.paddingBottom }),
  ...(props.paddingTop && { paddingTop: props.paddingTop }),
  ...(props.margin && { margin: props.margin }),
  ...(props.border && { border: props.border }),
  ...(props.borderRadius && { borderRadius: props.borderRadius }),
  ...(props.borderBottom && { borderBottom: props.borderBottom }),
  ...(props.borderTop && { borderTop: props.borderTop }),
  ...(props.background && { background: props.background }),
  ...(props.overflow && { overflow: props.overflow }),
  ...(props.cursor && { cursor: props.cursor }),
  ...(props.zIndex && { zIndex: props.zIndex }),
  ...(props.userSelect && { userSelect: props.userSelect }),
  ...(props.flexWrap && { flexWrap: props.flexWrap }),
  ...(props.gap && { gap: props.gap }),

  ...(props.hoverAnimation && {
    transform: 'translateY(0)',
    transition: 'all 0.15s ease-out',
    '&:hover': {
      transform: 'translate(5px, -5px)',
    },
  }),
}));

export const Button = styled.button((props) => ({
  display: props.display || 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: props.fontWeight ? props.fontWeight : '500',
  border: props.border ? props.border : 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease-out',
  fontSize: props.fontSize ? props.theme?.toEm(props.fontSize) : props.theme?.toEm(14),
  ...(props.width && { width: props.width }),
  ...(props.border && { border: props.border }),
  ...(props.borderRadius && { borderRadius: props.borderRadius }),
  ...(props.padding && { padding: props.padding }),
  ...(props.background && { background: props.background }),
  ...(props.margin && { margin: props.margin }),
  ...(props.color && { color: props.color }),

  '&:hover': {
    ...(props.hoverBackground && { backgroundColor: props.hoverBackground }),
    ...(props.hoverColor && { color: props.hoverColor }),
    ...(props.hoverBorder && { border: props.hoverBorder }),
  },
}));

export const P = styled.p((props) => ({
  color: props.theme.colors.main,
  fontSize: props.fontSize ? props.theme?.toEm(props.fontSize) : props.theme?.toEm(14),
  ...(props.weight && { fontWeight: props.weight }),
  ...(props.align && { textAlign: props.align }),
  ...(props.opacity && { opacity: props.opacity }),
  ...(props.margin && { margin: props.margin }),
  ...(props.padding && { padding: props.padding }),

  ...(props.hoverAnimation && {
    '&:hover': {
      color: '#3B49DF',
    },
  }),

  '@media (max-width: 980px)': {
    fontSize: props.theme?.toEm(14)
  },
}));

export const Textarea = styled.textarea((props) => ({
  width: '100%',
  resize: 'none',
  height: '134px',
  padding: '20px',
  outline: 'none',
  border: 'none',
  fontSize: props.fontSize ? props.theme?.toEm(props.fontSize) : props.theme?.toEm(14),
  ...(props.weight && { fontWeight: props.weight }),
}));

export const Image = styled.img((props) => ({
  ...(props.width && { width: props.width }),
  ...(props.border && { border: props.border }),
  ...(props.borderRadius && { borderRadius: props.borderRadius }),
  ...(props.margin && { margin: props.margin }),
  ...(props.background && { background: props.background }),
}));