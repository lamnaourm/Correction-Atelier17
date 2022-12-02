import React from 'react'
import { useSelector } from 'react-redux'

export default function DetailsCountry() {

  const Selectedcountry = useSelector(state => state.country.selectedCountry);
  const country = useSelector(state => state.country.data).filter(item => item.name.common===Selectedcountry);

  return (
    <div>
        {country.length!==0 && 
            <div>
                <img src={country[0].flags.png} alt="" />
                <h1>Population : {country[0].population}</h1>
            </div>
        }
    </div>
  )
}
