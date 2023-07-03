// import { getBannerApi } from '../../api/music/albums'
import { useAppDispatch, useAppSelector } from '../../store'
import { FC, Fragment, ReactNode, memo, useEffect } from 'react'
// layouts
import Layout from './cpns/Layout'
interface IPros {
  children?: ReactNode
}
const Music: FC<IPros> = () => {
  // 必须这么写
  const dispatch = useAppDispatch()
  return (
    <Fragment>
      <Layout></Layout>
    </Fragment>
  )
}
export default memo(Music)
