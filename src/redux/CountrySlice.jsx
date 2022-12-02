import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountries = createAsyncThunk(
  "countries/getCountries",
  async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data;
  }
);

const CountrySlice = createSlice({
  name: "countries",
  initialState: {
    data: [],
    loading: "idle",
    error: null,
    selectedCountry:''
  },
  reducers: {
    addCountry: (state,action) => {
        state.selectedCountry = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCountries.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(getCountries.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.data = action.payload;
        state.loading = "idle";
      }
    });
    builder.addCase(getCountries.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = "Error occured";
      }
    });
  },
});

export default CountrySlice.reducer;
export const {addCountry} = CountrySlice.actions;
