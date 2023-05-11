import { useRoutes } from 'react-router-dom'
import AppIndex from './AppIndex'
import Login from '../auth/Login'
import Register from '../auth/Register'
import Home from '../components/Home'

function AppNavigation() {
  let element = useRoutes([
    {
      path: '/',
      element: <Login />,
      children: [{ index: true }],
    },
    {
        element: <AppIndex />,
        children: [
            { index: true, element: <AppIndex /> },
            {
                path: '/home',
                element: <Home />,
            },
        ],
    },
    {
      path: '/register',
      element: <Register />,
    },
  ])
  return element
}
export default AppNavigation
