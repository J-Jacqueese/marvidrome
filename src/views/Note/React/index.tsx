import React, { FC, ReactNode, memo } from 'react'
interface IPros {
  children?: ReactNode
}
const NReact: FC<IPros> = () => {
  return <div>React</div>
}
export default memo(NReact)
