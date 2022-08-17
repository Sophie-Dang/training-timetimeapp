import { createSlice } from "@reduxjs/toolkit";

export const customInputSlice = createSlice({
  name: 'customInput',
  initialState: {
    selects: [],
  },
  reducers: {
    addSelect: (state, action) => {
      const isSelectExists = state.selects.find(select => action.payload.id === select.id);
      
      if (undefined === isSelectExists) {
        state.selects.push({
          id: action.payload.id,
          name: action.payload.name,
          options: action.payload.options,
          selectedOption: action.payload.selectedOption,
          isOptionsOpen: action.payload.isOptionsOpen,
        })
      }
    },
    toggleOptions: (state, action) => {
      const currentSelectIndex = state.selects.findIndex(select => select.id === action.payload);
      state.selects[currentSelectIndex].isOptionsOpen = !state.selects[currentSelectIndex].isOptionsOpen;
    },
    setSelect: (state, action) => {
      const currentSelectIndex = state.selects.findIndex(select => select.id === action.payload.selectId);
      state.selects[currentSelectIndex].isOptionsOpen = !state.selects[currentSelectIndex].isOptionsOpen;
      state.selects[currentSelectIndex].selectedOption = action.payload.value;
    }
  }
})