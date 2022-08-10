export const TOGGLE_ACCORDION = 'TOGGLE_ACCORDION';

export const toggleAccordion = (payload) => {
  return {
    type: TOGGLE_ACCORDION,
    payload,
  }
}