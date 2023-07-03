import YRequest from '../../service/index'
import { RootBanner } from './types/Recommend'

/** 获取推荐的轮播图数据 */
export async function getRecommendBannerApi(): Promise<RootBanner> {
  const result: RootBanner = await YRequest.get({ url: 'banner' })
  return result
}
