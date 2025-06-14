import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState } from '../types/types';



const initialState: IInitialState = {
  currentRowId: '',
};

const dragAndDropSlice = createSlice({
  name: 'dragAndDrop',
  initialState,
  reducers: {
    setCurrentRowId: (state, action: PayloadAction<string>) => {
      state.currentRowId = action.payload;
    },
  },
});

const { reducer, actions } = dragAndDropSlice;
export default reducer;
export const { setCurrentRowId } = actions;
