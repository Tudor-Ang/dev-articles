import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes'
import './assets/styles/index.scss'

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ Layout, ...props }) => <Route path={props.path} element={<Layout {...props} />} />)}
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
  );
}

export default App;
