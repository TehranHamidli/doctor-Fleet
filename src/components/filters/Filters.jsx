import Image from "next/image";
import filters from "./filters.module.css";
import CountriesFilter from "../section/sidebar/countries/countriesFilter/CountriesFilter";
import {numbers} from '/src/data';
function Filters() {
  return (
    <>
      <div className={filters.filtersContainer}>
        <div className={filters.filterResult}>
          <div className={filters.filtersText}>
            <p>Filters</p>
          </div>

          <div className={filters.resultText}>
            <p>Results</p>
            <span>475</span>
          </div>
        </div>

        <div className={filters.sortFilter}>
        <CountriesFilter data={numbers} />
        </div>
      </div>
    </>
  );
}

export default Filters;
