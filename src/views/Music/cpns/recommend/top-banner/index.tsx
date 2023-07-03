import React, {
  ElementRef,
  FC,
  ReactNode,
  memo,
  useEffect,
  useRef,
  useState
} from 'react'
import { useAppSelector } from '../../../../../store'
import { shallowEqual } from 'react-redux'
import { Carousel, IconButton } from '@material-tailwind/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { BannerWrapper } from './styled'
interface IPros {
  children?: ReactNode
}
// 顶部轮播图
const TopBanner: FC<IPros> = () => {
  const bannerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [curBackGroundUrl, setCurBackGroundUrl] = useState<string>('')
  // 从store中获取数据
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )
  useEffect(() => {
    // 获取背景图片 并添加高斯模糊
    const currentBackGroundUrl =
      banners[currentIndex !== 0 ? currentIndex - 1 : 0]?.imageUrl +
      '?imageView&blur=40x20'
    setCurBackGroundUrl(currentBackGroundUrl)
  }, [banners, currentIndex])

  // 动态切换背景图的逻辑
  const handleChangePrevIndex = (activeIndex: number) => {
    setCurrentIndex(activeIndex)
  }
  const handleChangeNextIndex = (activeIndex: number) => {
    setCurrentIndex(activeIndex)
  }
  return (
    <div className="h-60 flex relative">
      <BannerWrapper
        style={{
          background: `url('${curBackGroundUrl}') center center /6000px`
        }}
      >
        <Carousel
          slideRef={bannerRef}
          className="rounded-xl"
          autoplayDelay={5000}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill('').map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? 'bg-white w-8' : 'bg-white/50 w-4'
                  }`}
                  onClick={() => {
                    setActiveIndex(i)
                    handleChangePrevIndex(activeIndex)
                  }}
                />
              ))}
            </div>
          )}
          prevArrow={({ handlePrev, activeIndex }) => (
            <IconButton
              variant="gradient"
              size="lg"
              onClick={() => {
                handlePrev()
                handleChangePrevIndex(activeIndex)
              }}
              className="!absolute top-2/4 -translate-y-2/4 left-4"
            >
              <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
            </IconButton>
          )}
          nextArrow={({ handleNext, activeIndex }) => (
            <IconButton
              variant="gradient"
              size="lg"
              onClick={() => {
                handleNext()
                handleChangePrevIndex(activeIndex + 1)
              }}
              className="!absolute top-2/4 -translate-y-2/4 !right-4"
            >
              <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
            </IconButton>
          )}
        >
          {banners.map((item) => (
            <img
              key={item.imageUrl}
              src={item.imageUrl}
              alt="image 1"
              className="h-full w-full object-contain"
            />
          ))}
        </Carousel>
      </BannerWrapper>
    </div>
  )
}
export default memo(TopBanner)
