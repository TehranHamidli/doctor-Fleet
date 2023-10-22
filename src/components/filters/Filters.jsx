import Image from "next/image";
import filters from "./filters.module.css";
import arrowRight from "/src/images/Line.png";

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
          <p>Sorty By</p>
          <Image src={arrowRight} className={filters.arrowBottom} />
        </div>
      </div>
    </>
  );
}

export default Filters;
