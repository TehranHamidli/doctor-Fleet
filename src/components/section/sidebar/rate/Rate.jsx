import rate from "./rate.module.css";
import Image from "next/image";
import star from "/src/images/star.svg";
function Rate() {
  return (
    <>
      <div className={rate.rateContainer}>
        <div className={rate.rateName}>
          <p>Rate</p>
        </div>

        <div className={rate.rateStar}>
          <div className={`${rate.starFive} ${rate.star}`}>
            <input type="checkbox" />
            <span>
              <Image src={star} />
              <Image src={star} />
              <Image src={star} />
              <Image src={star} />
              <Image src={star} />
            </span>
          </div>

          <div className={`${rate.starFor} ${rate.star}`}>
            <input type="checkbox" />
            <span>
              <Image src={star} />
              <Image src={star} />
              <Image src={star} />
              <Image src={star} />
       
            </span>
          </div>

          <div className={`${rate.starThree} ${rate.star}`}>
            <input type="checkbox" />
            <span>
              <Image src={star} />
              <Image src={star} />
              <Image src={star} />
           
            </span>
          </div>

          <div className={`${rate.starTo} ${rate.star}`}>
            <input type="checkbox" />
            <span>
              <Image src={star} />
              <Image src={star} />
           
            </span>
          </div>

          <div className={`${rate.starOne} ${rate.star}`}>
            <input type="checkbox" />
            <span>
              <Image src={star} />
        
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rate;
