import countries from "./countries.module.css";
import arrowBottom from "/src/images/Line.png";
import Image from "next/image";
function Countries() {
  return (
    <>
     
      <div className={countries.countriesContainer}>
        <div className={countries.countriesName}>
          <p>Countries</p>
        </div>
        <div className={countries.countriesFilter}>
          <p>Azerbaijan</p>
          <Image src={arrowBottom} className={countries.arrowBottom} />
        </div>

        <div className={countries.cityFilter}>
          <p>City</p>
          <Image src={arrowBottom} className={countries.arrowBottom} />
        </div>
      </div>
    </>
  );
}

export default Countries;
