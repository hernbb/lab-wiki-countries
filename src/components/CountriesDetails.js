// import countriesData from "../countries.json"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

 function CountriesDetails(props){
  const {countriesData}= props
  const [foundCountry, setFoundCountry] = useState();

  const params = useParams()
  const alpha3Code = params.alpha3Code 
  
    useEffect(() => {
      
        const country = countriesData.find((pais) => {
            
            return pais.alpha3Code === alpha3Code;
          });
          console.log(country)
          if (country) {
            setFoundCountry(country);
          }
    }, [alpha3Code])
   return (
    <div>
    {foundCountry && <>
         <h1>Country Details</h1>
         <h4>Name:{foundCountry.name.common}</h4>
         <h5>Official Name:{foundCountry.name.official}</h5>

    </>
    }
    
    </div>
   )
}
export default CountriesDetails