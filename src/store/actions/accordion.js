export const TOGGLE_ACCORDION = 'TOGGLE_ACCORDION';

export const toggleAccordion = (elementID) => {
  return {
    type: TOGGLE_ACCORDION,
    elementID,
  }
}