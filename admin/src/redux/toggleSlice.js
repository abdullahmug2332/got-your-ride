import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    value: true, // default value
  },
  reducers: {
    toggleValue: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleValue } = toggleSlice.actions;
export default toggleSlice.reducer;
