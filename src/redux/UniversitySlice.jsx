import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUniversities = createAsyncThunk(
    "universities/getUniversities",
    async () => {
      const response = await axios.get("http://universities.hipolabs.com/search?country=");
      return response.data;
    }
  );
  

const CountrySlice = createSlice({
  name: "universities",
  initialState: {
    data: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUniversities.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(getUniversities.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.data = action.payload;
        state.loading = "idle";
      }
    });
    builder.addCase(getUniversities.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = "Error occured";
      }
    });
  },
});

export default CountrySlice.reducer;
