import React, { FC, Fragment, ReactNode, Suspense, memo } from 'react'
import { Outlet } from 'react-router-dom'
interface IPros {
  children?: ReactNode
}
const Note: FC<IPros> = () => {
  return (
    <Fragment>
      <div>Note</div>
      {/* 二级路由站位 */}
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </Fragment>
  )
}
export default memo(Note)
