import React from "react";
import doctors from "./doctor.module.css";
import Image from "next/image";
import star from "/src/images/star.svg";
import heartIcon from "/src/images/heartIcon.svg";
import mapIcon from "/src/images/mapIcon.png";
import { staff } from "/src/data";
import doctor2 from '/src/images/doctor2.png'

function Doctor() {
  return (
    <>
      {staff.map((doctor) => (
        <div key={doctor.id} className={doctors.doctor}>
          <div className={doctors.image}>
            <Image src={doctor2} className={doctors.img} width={200} height={200} />
          </div>
          <div className={doctors.imgIcon}>
            <p>Plastic</p>
            <Image src={heartIcon} />
          </div>

          <div className={doctors.doctorContainer}>
            <div className={doctors.doctorsName}>
              <p className={doctors.name}>{doctor.name}</p>
              <p className={doctors.experienceYear}>
                Experience Year <span>{doctor["experience-years"]}</span>
              </p>
            </div>

            <div className={doctors.position}>
              <p>{doctor.position}</p>
            </div>

            <div className={doctors.city}>
              <Image src={mapIcon} />
              <p>{doctor.state}</p>
            </div>

            <div className={doctors.info}>
              <div className={doctors.infoLeft}>
                <Image src={star} />
                {/* Doktorun yıldız derecesini kullanmak isterseniz: */}
                {/* <p className={doctors.star}>{doctor.star}</p> */}
                <p className={doctors.rewiews}>(12 rewiews)</p>
              </div>

              <div className={doctors.detailsButton}>
                <p>See full details</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Doctor;
