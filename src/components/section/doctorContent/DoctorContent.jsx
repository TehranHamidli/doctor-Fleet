import Doctor from "./doctor/Doctor";
import doctorContent from "./doctorcontent.module.css";

function DoctorContent() {
  return (
    <div className={doctorContent.contentContainer}>
      <Doctor />
  
    </div>
  );
}

export default DoctorContent;
