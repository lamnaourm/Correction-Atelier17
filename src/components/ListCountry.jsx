import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../redux/CountrySlice";
import { getUniversities } from "../redux/UniversitySlice";

export default function ListCountry() {
  const dispatch = useDispatch();
  const listpays = useSelector(state => state.country.data).map(item => item.name.common);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getUniversities());
  }, [dispatch]);
  return <div>
<select>
    {listpays.map(item => <option>{item}</option>)}
</select>

  </div>;
}
