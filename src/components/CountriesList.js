import {Link} from "react-router-dom";
import countriesData from "../countries.json"
import {useState} from "react";

function CountriesList (props){
  const {countriesData} = props
//const [countries, setCountries] = useState(countriesData)
   
 return (
     
 <>
  {countriesData.map((eachCountry) => {
   return (
     <ul>
   
    <Link to={`/country/${eachCountry.alpha3Code}`}>{eachCountry.name.common} </Link>
   
     </ul>

   )

  })}

 </>
 )
}
export default CountriesList