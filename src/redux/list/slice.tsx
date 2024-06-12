import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from '@redux/store';
import {listState} from './types';

const initialState: listState = {
  places: [],
  selectedPlaces: [],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    handlePlaces(state, {payload}) {
      state.selectedPlaces = payload;
    },
    setPlaces(state, {payload}) {
      state.places = payload;
    },
    removeChip(state, {payload}) {
      state.selectedPlaces = state.selectedPlaces.filter(
        chip => chip !== payload,
      );
    },
  },
});

export const {handlePlaces, setPlaces, removeChip} = listSlice.actions;

/* SELECTORS */
export const placesData = (state: RootState) => state.list.places;
export const selectedPlacesData = (state: RootState) =>
  state.list.selectedPlaces;

export default listSlice.reducer;
