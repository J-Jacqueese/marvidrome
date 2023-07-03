import YRequest from '../../service/index'
import { AlbumsRoot } from './types/Albums'

/** 获取最新专辑 */
export async function getNewestAlbumsApi(): Promise<AlbumsRoot> {
  const result: AlbumsRoot = await YRequest.get({ url: 'album/newest' })
  return result
}
