import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCountry, getCountries } from "../redux/CountrySlice";
import { getUniversities } from "../redux/UniversitySlice";

export default function ListCountry() {
  const dispatch = useDispatch();
  const listpays = useSelector((state) => state.country.data).map(
    (item) => item.name.common
  );
  const selectedpays = useSelector((state) => state.country.selectedCountry);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getUniversities());
  }, [dispatch]);
  return (
    <div>
      <select
        value={selectedpays}
        onChange={(e) => dispatch(addCountry(e.target.value))}
      >
        {listpays.map((item,index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
}
