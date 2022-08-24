import { createSlice } from "@reduxjs/toolkit";

export const toolNavSlice = createSlice({
  name: 'toolNav',
  initialState: {
    currentTemplate: 'default',
    currentType: 'simple',
    types: {
      simple: 'simple',
      card: 'card',
      form: 'form',
    },
    templates: {
      default: 'default',
      form: 'form'
    },
  },
  reducers: {
    setType: (state, action) => {
      switch (action.payload.type) {
        case state.types.simple:
          state.currentType = state.types.simple;
          break;

        case state.types.card:
          state.currentType = state.types.card;
          break;

        case state.types.form:
          state.currentType = state.types.form;
          break;
      
        default:
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
    }
  }
})
