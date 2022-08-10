import { TOGGLE_ACCORDION } from '../actions/accordion';

const initialState = {
  show: false,
}

const accordion = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_ACCORDION: {
      const currentElmt = document.getElementById(action.payload.target);
      const currentChevron = document.getElementById(`chevron-${action.payload.target}`)

      if (currentElmt.classList.contains(action.payload.classClose)) {
        currentElmt.classList.remove(action.payload.classClose);
        currentChevron.classList.add(action.payload.classChevron);
      } else {
        currentElmt.classList.add(action.payload.classClose);
        currentChevron.classList.remove(action.payload.classChevron);
      }

      return {...state, show: !state.show};
    }
    default: {
      return state
    }
  }
}

export default accordion;
