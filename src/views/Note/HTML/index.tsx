import React, { FC, ReactNode, memo } from 'react'
interface IPros {
  children?: ReactNode
}
const HTML: FC<IPros> = () => {
  return <div>HTML</div>
}
export default memo(HTML)
