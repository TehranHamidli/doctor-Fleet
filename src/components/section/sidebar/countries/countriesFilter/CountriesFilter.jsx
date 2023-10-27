import Image from "next/image";
import select from "./select.module.css";
import arrowBottom from "/src/images/Line.png";

function CountriesFilter(props) {

  return (
    <>
      <div className={select.filter}>
        <select className={select.selectContainer}>
          {
            props.data.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
        </select>
        <div className={select.arrowBottom}>
          <Image src={arrowBottom} />
        </div>
      </div>
    </>
  );
}

export default CountriesFilter;
