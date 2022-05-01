import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: ['Ahmed', 'anas'],
};
export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addReservation: (state, action) => {
      state.value.push(action.payload);
    },
    removeResevation: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});
export const { addReservation, removeResevation } = userSlice.actions;
export default userSlice.reducer;
