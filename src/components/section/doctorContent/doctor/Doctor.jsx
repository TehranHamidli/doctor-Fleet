import doctors from "./doctor.module.css";
import Image from "next/image";
import doctor1 from "/src/images/Doctor 1.png";
import star from "/src/images/star.svg";
import heartIcon from "/src/images/heartIcon.svg";
import mapIcon from "/src/images/mapIcon.png";
function Doctor() {
  return (
    <>
      <div className={doctors.doctor}>
        <div className={doctors.image}>
          <Image src={doctor1} className={doctors.img} />
        </div>
        <div className={doctors.imgIcon}>
          <p>Plastic</p>
          <Image src={heartIcon} />
        </div>

        <div className={doctors.doctorContainer}>
          <div className={doctors.doctorsName}>
            <p className={doctors.name}>Joshua Greenwald, MD, FACS</p>
            <p className={doctors.experienceYear}>
              Experience Year <span>10</span>
            </p>
          </div>

          <div className={doctors.position}>
            <p>Associate Professor</p>
          </div>

          <div className={doctors.city}>
            <Image src={mapIcon} />
            <p>New York, United States</p>
          </div>

          <div className={doctors.info}>
            <div className={doctors.infoLeft}>
              <Image src={star} />
              <p className={doctors.star}>4.8</p>
              <p className={doctors.rewiews}>(12 rewiews)</p>
            </div>

            <div className={doctors.detailsButton}>
              <p>See full details</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Doctor;
