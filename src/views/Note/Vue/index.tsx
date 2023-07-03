import React, { FC, ReactNode, memo } from 'react'
interface IPros {
  children?: ReactNode
}
const Vue: FC<IPros> = () => {
  return <div>Vue</div>
}
export default memo(Vue)
