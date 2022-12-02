import React from 'react'
import { useSelector } from 'react-redux';

export default function ListUniversity() {

  const Selectedcountry = useSelector(state => state.country.selectedCountry);
  const listUniversities = useSelector(state => state.university.data).filter(item => item.country===Selectedcountry);

  return (
    <div>

        <h1>Liste des universites</h1>
        {listUniversities.length!==0 && 
            listUniversities.map(item => <h2>{item.name}</h2>)
        }
    </div>
  )
}
