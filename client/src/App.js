import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes'
import { ThemeProvider } from 'styled-components';
import Theme from './theme'

//global style
import './assets/styles/index.scss'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes>
          {routes.map(({ Layout, ...props }) => <Route key={props.name} path={props.path} element={<Layout {...props} />} />)}
          {/* TODO: move 404 page to the routes.js file --> */}
          <Route
            path='*'
            element={
              <div>
                <h2>404 Page not found etc</h2>
              </div>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>

  );
}

export default App;
