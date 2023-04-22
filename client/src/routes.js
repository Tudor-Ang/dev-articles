import Layout from './components/Layout/'

import Auth from './pages/Auth'
import Home from './pages/Home'
import User from './pages/User'

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
  },
  {
    name: 'UserProfile',
    path: '/profile/:userId',
    isPrivate: false,
    Component: User,
    Layout,
  }
]

export default routes