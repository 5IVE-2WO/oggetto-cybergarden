import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const lectorsSlice = createSlice({
  name: "lectors",
  initialState: {
    allLectors: {
      status: null,
      error: null,
      lectors: [],
    },
  },
  reducers: {},
  extraReducers: {},
});

export const {} = lectorsSlice.actions;

export default lectorsSlice.reducer;
