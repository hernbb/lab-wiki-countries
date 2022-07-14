import countriesData from "../countries.json"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

 function CountriesDetails(){
  const [foundCountry, setFoundCountry] = useState();

  const params = useParams()
  const alpha3Code = params.alpha3Code 
  
    useEffect(() => {
        const country = countriesData.find((pais) => {
            
            return pais.alpha3Code === alpha3Code;
          });
          if (country) {
            setFoundCountry(country);
          }
    }, [alpha3Code])
   return (
    <div>
    {foundCountry && <>
         <h1>Country Details</h1>
         <h4>Name: {foundCountry.name.common}</h4>
         <h5>Official Name: {foundCountry.name.official}</h5>
         <h5>Currency: {foundCountry.currencies.AWG.name}</h5>
    </>
    }
    
    </div>
   )
}
export default CountriesDetails