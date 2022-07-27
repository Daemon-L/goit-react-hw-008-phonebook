import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async cridentials => {
  try {
    const { data } = await axios.post('/users/signup', cridentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logIn = createAsyncThunk('auth/login', async cridentials => {
  try {
    const { data } = await axios.post('/users/login', cridentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logOut = createAsyncThunk('auth/logout', async() => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkIPI) => {
    const state = thunkIPI.getState()
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      
      return thunkIPI.rejectWithValue(5);
    }

    token.set(persistedToken);
    try {
      const {data} = await axios.get('users/current');
      return data;
    } catch (error) {}
  }
);

export const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};