import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getRecommendBannerApi } from '../../api/music/recommend'
import { banner } from '../../api/music/types/Recommend'
export const fetchRecommendBannerAction = createAsyncThunk(
  'recommend/fetchBanners',
  async (args, { dispatch }) => {
    const { banners, code } = await getRecommendBannerApi()
    if (code == 200) {
      dispatch(getBannersAction(banners))
    }
  }
)
interface IProps {
  banners: banner[]
}
const initialState: IProps = {
  banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    // 此时payload就等价于返回的banners
    getBannersAction(state, { payload }) {
      state.banners = payload
    }
  }
})

export const { getBannersAction } = recommendSlice.actions
export default recommendSlice.reducer
