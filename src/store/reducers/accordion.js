import { TOGGLE_ACCORDION } from '../actions/accordion';

const initialState = {
  prevId: null,
}

const accordion = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_ACCORDION: {
      const currentElmt = document.getElementById(action.elementID.target);
      const currentChevron = document.getElementById(`chevron-${action.elementID.target}`);

      // Close previous element clicked
      if (null !== state.prevId && state.prevId !== action.elementID.target) {
        const prevElement = document.getElementById(state.prevId);
        const prevChevron = document.getElementById(`chevron-${state.prevId}`);

        prevElement.classList.add(action.elementID.classClose);
        prevChevron.classList.remove(action.elementID.classChevron);
      }
      
      // Add class if exists or remove it it it doesn't
      if (currentElmt.classList.contains(action.elementID.classClose)) {
        currentElmt.classList.remove(action.elementID.classClose);
        currentChevron.classList.add(action.elementID.classChevron);
      } else {
        currentElmt.classList.add(action.elementID.classClose);
        currentChevron.classList.remove(action.elementID.classChevron);
      }

      return {
        ...state,
        prevId: action.elementID.target,
      };
    }
    default: {
      return state;
    }
  }
}

export default accordion;
