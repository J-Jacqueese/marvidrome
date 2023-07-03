import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// 专辑reducer
import albumsReducer from './music/albums'
import recommendReducer from './music/recommend'
import registerReducer from '../views/Pages/Register/store/register'

const store = configureStore({
  reducer: {
    register: registerReducer,
    albums: albumsReducer,
    recommend: recommendReducer
  }
})
// 设置store的中的类型
export type RootState = ReturnType<typeof store.getState>
// 自定义自己的useSelector
// 在整个应用程序中使用，而不是简单的 `useDispatch` 和 `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export default store
