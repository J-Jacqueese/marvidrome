import React, { FC, ReactNode, memo } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Typography, List, ListItem } from '@material-tailwind/react'
import { UserCircleIcon, MusicalNoteIcon } from '@heroicons/react/24/outline'
// 二级菜单组件
import NavListMemu from './NavListMemu'
interface IPros {
  children?: ReactNode
}

const NavList: FC<IPros> = () => {
  const navigate = useNavigate()
  function handleChangeRoute(path: string) {
    // 使用push方法进行路由跳转
    console.log(path)
    navigate(path)
  }
  return (
    <div>
      <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <MusicalNoteIcon className="h-[18px] w-[18px]" />
          <Link to="/music">Music</Link>
        </ListItem>
        {/* 二级菜单链接 */}
        <NavListMemu />
      </List>
    </div>
  )
}
export default memo(NavList)
