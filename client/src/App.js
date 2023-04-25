import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes'
import { ThemeProvider } from 'styled-components';
import Theme from './theme'

//global style
import './assets/styles/index.scss'

// TODO: Add redux 
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes>
          {routes.map(({ Layout, Component, ...props }) => <Route key={props.name} path={props.path} element={<Layout {...props}><Component {...props} /></Layout>} />)}
        </Routes>
      </Router>
    </ThemeProvider>

  );
}

export default App;
