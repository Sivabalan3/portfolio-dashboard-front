import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constant';
import { notification } from 'antd';


export const registerUser = createAsyncThunk(
  'users/register',
  async (user, thunkAPI) => {
    const { username, email, password } = user;
    try {
      const response = await axios.post(BASE_URL+'/api/users', { username, email, password });
      if (response.data.message) {
        notification.success({
          message: 'Success',
          description: response.data.message
        });
      }
      return response.data;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        notification.error({
          message: 'Error',
          description: error.response.data.message
        });
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//LOGINUSER
export const loginUser = createAsyncThunk(
  'users/login',
  async (user, thunkAPI) => {
    const { email, password } = user;
    try {
      const response = await axios.post(BASE_URL+'/api/users/auth', { email, password });
      if (response.data.message) {
        notification.success({
          message: 'Success',
          description: response.data.message
        });
      }
      return response.data;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        notification.error({
          message: 'Error',
          description: error.response.data.message
        });
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
//LOGOUT
export const logoutUser = createAsyncThunk(
  'users/logout',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL+'/api/users/logout');
      if (response.data.message) {
        notification.success({
          message: 'Success',
          description: response.data.message
        });
      }
      return response.data;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        notification.error({
          message: 'Error',
          description: error.response.data.message
        });
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: { entities: [], loading: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = 'loading';
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.entities.push(action.payload);
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = 'idle';
      state.error = action.payload;
    });

    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = 'loading';
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.entities.push(action.payload);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = 'idle';
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;
