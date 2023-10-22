import DoctorContent from './doctorContent/doctorContent';
import section from './section.module.css';
import Sidebar from './sidebar/Sidebar';


function Section() {
  return(
    <div className={section.sectionContainer}>
    <Sidebar />
    <DoctorContent />
    
    
    </div>
  )
}

export default Section;
