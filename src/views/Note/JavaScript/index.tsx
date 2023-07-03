import React, { FC, ReactNode, memo } from 'react'
interface IPros {
  children?: ReactNode
}
const JavaScript: FC<IPros> = () => {
  return <div>JavaScript</div>
}
export default memo(JavaScript)
