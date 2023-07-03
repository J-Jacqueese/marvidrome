import { FC, ReactNode, memo, useEffect } from 'react'
import { useAppDispatch } from '../../../../store'
import { Card } from '@material-tailwind/react'
import { fetchRecommendBannerAction } from '../../../../store/music/recommend'
import TopBanner from './top-banner'
interface IPros {
  children?: ReactNode
}
const Recommend: FC<IPros> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendBannerAction())
  }, [])
  return (
    <div className="w-full px-2 py-2">
      <Card>
        <TopBanner></TopBanner>
      </Card>
    </div>
  )
}
export default memo(Recommend)
