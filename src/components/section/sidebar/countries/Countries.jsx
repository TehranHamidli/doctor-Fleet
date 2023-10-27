
import countries from "./countries.module.css";
import { countrys, citys } from "/src/data"; // data.jsx dosyasından verileri içe aktarın
import CountriesFilter from "./countriesFilter/CountriesFilter";

function Countries() {
  return (
    <>
      <div className={countries.countriesContainer}>
        <div className={countries.countriesName}>
          <p>Countries</p>
        </div>

        <div className={countries.countrysFilter}>
          <CountriesFilter data={countrys} /> 
        </div>

        <div className={countries.citysFilter}>
          <CountriesFilter data={citys} />
        </div>
      </div>
    </>
  );
}

export default Countries;
