import Layout from './components/Layout/'

import Auth from './pages/Auth'
import Home from './pages/Home'
import User from './pages/User'
import Article from './pages/Article'
import Write from './pages/Write'
import NotFound from './pages/NotFound'

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
  },
  {
    name: 'article',
    path: '/article/:article',
    isPrivate: false,
    Component: Article,
    Layout,
  },
  {
    name: 'NewArticle',
    path: '/write',
    isPrivate: false,
    Component: Write,
    Layout,
  },
  {
    name: '404',
    path: '*',
    isPrivate: false,
    Component: NotFound,
    Layout,
  },
]

export default routes