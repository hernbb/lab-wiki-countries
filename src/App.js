import { Routes, Route } from "react-router-dom";
import CountriesDetails from "./components/CountriesDetails";
import Navbar from './components/Navbar';
import CountriesList from "./components/CountriesList";
import { useState, useEffect } from "react";
import './App.css';
import countriesData from "./countries.json"

// const apiURL = "https://ih-countries-api.herokuapp.com/countries"

function App() {

  // useEffect(() => {
  //   const [fetching, setFetching] = useState([]);

  //   console.log("useEffect - Initial render (Mounting)");
  //   fetch(apiURL)
  //   .then((response) => {response.json()})
  //   .then((response) => {setFetching(response)})


  // }, []);
  

  return (
    <div className="App">
 <Navbar/>

 <div className="App-header">
 
 <div>
 <CountriesList countriesData={countriesData}/>
 </div>

 <div>
 <Routes>
        <Route path="/country/:alpha3Code" element={<CountriesDetails countriesData={countriesData} />} />
  </Routes>
 </div>
 </div>
    </div>
  );
}

export default App;
