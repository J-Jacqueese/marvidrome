import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import Albums from '../views/Music/cpns/albums'
import Recommend from '../views/Music/cpns/recommend/Recommend'

// 路由懒加载
const Music = lazy(() => import('../views/Music'))
const Login = lazy(() => import('../views/Pages/Login'))
const Register = lazy(() => import('../views/Pages/Register'))
const Note = lazy(() => import('../views/Note'))
// 笔记的二级路由
const HTML = lazy(() => import('../views/Note/HTML'))
const CSS = lazy(() => import('../views/Note/CSS'))
const JavaScript = lazy(() => import('../views/Note/JavaScript'))
const NReact = lazy(() => import('../views/Note/React'))
const Vue = lazy(() => import('../views/Note/Vue'))

// 跟顶
const routes: RouteObject[] = [
  // {
  //   path: '/',
  //   // 重定向
  //   element: <Navigate to="/home" />
  // },
  // {
  //   path: '/home',
  //   element: <HeaderNav />
  // },
  {
    path: '/music',
    element: <Music />,
    children: [
      { path: '/music/recommend', element: <Recommend /> },
      { path: '/music/albums', element: <Albums /> }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/note',
    element: <Note />,
    children: [
      {
        path: '/note/html',
        element: <HTML />
      },
      {
        path: '/note/css',
        element: <CSS />
      },
      {
        path: '/note/javascript',
        element: <JavaScript />
      },
      {
        path: '/note/react',
        element: <NReact />
      },
      {
        path: '/note/vue',
        element: <Vue />
      }
    ]
  }
]

export default routes
