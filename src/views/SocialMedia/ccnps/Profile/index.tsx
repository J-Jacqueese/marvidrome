import React, { FC, ReactNode, memo } from 'react'
interface IPros {
  children?: ReactNode
}
const Profile: FC<IPros> = () => {
  return <div>Profile</div>
}
export default memo(Profile)
