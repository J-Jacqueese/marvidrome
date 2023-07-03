import { FC, ReactNode, memo, useEffect } from 'react'
import Card from '@mui/material/Card'
import MediaControlCard from './albumcard'
import { useAppDispatch } from '../../../../store'
import { fetchAlbumsAction } from '../../../../store/music/albums'
interface IPros {
  children?: ReactNode
}
const Albums: FC<IPros> = () => {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(fetchAlbumsAction())
  },[])
  return (
    <div>
      <Card variant="outlined">
        <MediaControlCard></MediaControlCard>
      </Card>
    </div>
  )
}
export default memo(Albums)
