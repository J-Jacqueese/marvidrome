import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getNewestAlbumsApi } from '../../api/music/albums'
export const fetchAlbumsAction = createAsyncThunk(
  'albums/fetchAlbums',
  async () => {
    const { albums } = await getNewestAlbumsApi()
    console.log('albums', albums)
    return albums
  }
)
interface IProps {
  albums: any[]
}
const initialState: IProps = {
  albums: []
}

const albumSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
  }
})

// export const { fetchAlbumsAction } = albumSlice.actions

export default albumSlice.reducer
