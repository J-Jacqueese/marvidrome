import React, { FC, ReactNode, memo } from 'react'
interface IPros {
  children?: ReactNode
}
const CSS: FC<IPros> = () => {
  return <div>CSS</div>
}
export default memo(CSS)
