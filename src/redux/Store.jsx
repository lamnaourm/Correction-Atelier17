import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CountryReducer from "./CountrySlice";
import UniversityReducer from "./UniversitySlice";


const reducer = combineReducers({
    country: CountryReducer,
    university: UniversityReducer,
});

const store = configureStore({reducer}); 


export default store; 