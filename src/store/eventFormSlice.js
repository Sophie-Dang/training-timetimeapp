import { createSlice } from "@reduxjs/toolkit";
import { eventListGoogle, eventListZoho } from "./datas/dataEventList";

export const eventFormSlice = createSlice({
  name: 'eventForm',
  initialState: {
    eventListGoogle: eventListGoogle,
    eventListZoho: eventListZoho,
  },
  reducers: {

  }
})