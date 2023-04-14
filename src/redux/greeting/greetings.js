/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  message: 'Waiting for server to respond',
  error: '',
  loading: false,
};

export const greetingsFetch = createAsyncThunk('greetings/greetingsFetch', async () => {
  const res = await axios.get('http://localhost:3000/messages');

  return res.data;
});

const greetingsFetchSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(greetingsFetch.pending, (state) => {
      state.loading = true;
      state.message = 'Loading...';
      state.error = '';
    });
    builder.addCase(greetingsFetch.fulfilled, (state, action) => {
      state.message = action.payload;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(greetingsFetch.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.message = 'error';
    });
  },
});

const { reducer } = greetingsFetchSlice;

export default reducer;
