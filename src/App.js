import { Routes, Route } from "react-router-dom";
import CountriesDetails from "./components/CountriesDetails";
import Navbar from './components/Navbar';
import CountriesList from "./components/CountriesList";
import './App.css';

function App() {
  

  return (
    <div className="App">
 <Navbar/>

 <div className="App-header">
 
 <div>
 <CountriesList/>
 </div>

 <div>
 <Routes>
        <Route path="/country/:alpha3Code" element={<CountriesDetails/>} />
  </Routes>
 </div>
 </div>
    </div>
  );
}

export default App;
