import React, { FC, ReactNode, memo, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton
} from '@material-tailwind/react'
import NavList from './NavList'
interface IPros {
  children?: ReactNode
}
const NavBar: FC<IPros> = () => {
  // 使用hook只能放在顶层
  const navigate = useNavigate()
  const [openNav, setOpenNav] = React.useState(false)
  // 跳转登录页
  const navigation = (path: string) => {
    navigate(path)
  }
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])
  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
            variant="h5"
          >
            Jacqueese
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">
              <NavList />
            </div>
            <Button
              variant="outlined"
              size="sm"
              className="hidden lg:inline-block"
              onClick={() => {
                navigation('/login')
              }}
            >
              <span>Sign In</span>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
              onClick={() => {
                navigation('/register')
              }}
            >
              <span>Sign UP</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </Collapse>
      </Navbar>
    </>
  )
}
export default memo(NavBar)
