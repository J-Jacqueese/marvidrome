import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import RegisterType from '../type'
import { postRegister } from '../service/register'
export const registerAction = createAsyncThunk(
  'register',
  async (inputs: RegisterType, { dispatch }) => {
    const res = await postRegister(inputs)
    console.log(res)
    dispatch(registerPostAction(res))
  }
)
const initialState: RegisterType = {
  email: '',
  password: '',
  name: '',
  username: ''
}
const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerPostAction(state, { payload }) {
      state.email = payload.email
      state.password = payload.password
      state.name = payload.name
      state.username = payload.username
    }
  }
})
export const { registerPostAction } = registerSlice.actions
export default registerSlice.reducer
