import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cards: [],
  },
  reducers: {
    addCard: (state, action) => {
      const isCardExists = state.cards.find(card => action.payload.id === card.id);

      if (undefined === isCardExists) {
        state.cards.push({
          id: action.payload.id,
          isOpen: action.payload.isOpen,
        })
      }
    },
    toggleCard: (state, action) => {
      const currentCardIndex = state.cards.findIndex(card => action.payload.id === card.id);
      state.cards[currentCardIndex].isOpen = !state.cards[currentCardIndex].isOpen;
    }
  }
})