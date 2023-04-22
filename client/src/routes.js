import Layout from './components/Layout/'

import Auth from './pages/Auth'
import Home from './pages/Home'

const routes = [
  {
    name: 'Login',
    path: '/auth/:type',
    isPrivate: false,
    Component: Auth,
    Layout,
  },
  {
    name: 'Home',
    path: '/',
    isPrivate: false,
    Component: Home,
    Layout,
  }
]

export default routes