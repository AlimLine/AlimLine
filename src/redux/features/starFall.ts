import {type PayloadAction, createSlice } from '@reduxjs/toolkit';

export type StarFallTypes = 'none' | 'star';

interface AppState {
  star_fall: StarFallTypes
}

const initialState: AppState = {
  star_fall: 'none'
};

export const starFall = createSlice({
  name: 'star_fall',
  initialState,
  reducers: {
    setStarFall(state, action: PayloadAction<StarFallTypes>) {
      state.star_fall = action.payload;
    }
  }
});

export const { setStarFall } = starFall.actions;
export default starFall.reducer;
