import { createSlice } from "@reduxjs/toolkit";

export const accordionSlice = createSlice({
  name: 'accordion',
  initialState: {
    prevId: null,
  },
  reducers: {
    toggleAccordion: (state, action) => {
      const currentElmt = document.getElementById(action.payload.target);
      const currentChevron = document.getElementById(`chevron-${action.payload.target}`);

      // Close previous element clicked if type is not show-all
      if (action.payload.type !== 'show-all') {
        if (null !== state.prevId && state.prevId !== action.payload.target) {
          const prevElement = document.getElementById(state.prevId);
          const prevChevron = document.getElementById(`chevron-${state.prevId}`);
  
          prevElement.classList.add(action.payload.classClose);
          prevChevron.classList.remove(action.payload.classChevron);
        }
      }

      // Add class if exists or remove it it it doesn't
      if (currentElmt.classList.contains(action.payload.classClose)) {
        currentElmt.classList.remove(action.payload.classClose);
        currentChevron.classList.add(action.payload.classChevron);
      } else {
        currentElmt.classList.add(action.payload.classClose);
        currentChevron.classList.remove(action.payload.classChevron);
      }

      state.prevId = action.payload.target;
    }
  }
})