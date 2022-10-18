import { createSlice } from "@reduxjs/toolkit";

export const toolNavSlice = createSlice({
  name: 'toolNav',
  initialState: {
    currentTemplate: 'default',
    currentType: 'simple',
    isAnimated: false,
    types: {
      simple: 'simple',
      card: 'card',
      form: 'form',
      animate: 'animate'
    },
    templates: {
      default: 'default',
      form: 'form',
    },
  },
  reducers: {
    setType: (state, action) => {
      switch (action.payload.type) {
        case state.types.simple:
          state.isAnimated = false;
          state.currentType = state.types.simple;
          break;

        case state.types.card:
          state.isAnimated = false;
          state.currentType = state.types.card;
          break;

        case state.types.form:
          state.isAnimated = false;
          state.currentType = state.types.form;
          break;

        case state.types.animate:
          state.isAnimated = true;
          state.currentType = state.types.animate;
          break;
        
        default:
          state.isAnimated = false;
          state.currentType = 'simple';
          break;
      }
    },
    setTemplate: (state, action) => {
      switch (action.payload.template) {
        case state.templates.form:
          state.currentTemplate = state.templates.form;
          break;
      
        default:
          state.currentTemplate = state.templates.default;
          break;
      }
    },
  }
})
