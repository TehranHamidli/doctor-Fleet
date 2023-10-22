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

        <div className={price.select}>
          <div className={price.min}>
            <p>Min</p>
            <div className={price.priceMin}>
              <p>1</p>
              <Image src={arrowBottom} className={price.arrowBottom} />
            </div>
          </div>

          <div className={price.max}>
            <p>Max</p>
            <div className={price.priceMax}>
              <p>3000</p>
              <Image src={arrowBottom} className={price.arrowBottom} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Price;
