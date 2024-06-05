import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

export const fetchRestaurants = createAsyncThunk(
  'restaurants/fetchRestaurants',
  async () => {
    const response = await axios.get(API_URL);

    return response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    ?.restaurants; 
  }
);


const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: {
    data: [],
    status: '', 
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload; 
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default restaurantSlice.reducer;
