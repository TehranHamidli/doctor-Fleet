import price from "./price.module.css";
import Image from "next/image";
import arrowBottom from "/src/images/Line.png";
function Price() {
  return (
    <>
      <div className={price.priceContainer}>
        <div className={price.priceName}>
          <p>Price</p>
        </div>

        <div className={price.selectContainer}>
          <div>
            <div className={price.min}>Min</div>
            <select className={price.select}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <div>
            <div className={price.max}>Max</div>
            <select className={price.select}>
              <option>3000</option>
              <option>2000</option>
              <option>1000</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Price;
