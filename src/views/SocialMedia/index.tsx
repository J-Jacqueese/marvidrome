import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './style.scss'
import { FC, ReactNode, memo } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './ccnps/Home'
import Profile from './ccnps/Profile'
import LeftBar from './ccnps/LeftBar'
import RightBar from './ccnps/RightBar'
interface IPros {
  children?: ReactNode
}
const SocialMedia: FC<IPros> = () => {
  const queryClient = new QueryClient()

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="light">
          <div style={{ display: 'flex' }}>
            <LeftBar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div>
      </QueryClientProvider>
    )
  }

  return (
    <div>
      <Layout></Layout>
    </div>
  )
}
export default memo(SocialMedia)
