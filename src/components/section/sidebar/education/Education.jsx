import education from "./education.module.css";

function Education() {
  return (
    <>
      <div className={education.educationContainer}>
        <div className={education.educationName}>
          <p>Education</p>
        </div>

        <div className={education.educationCheckbox}>
          <div className={education.checkBox}>
            <input type="checkbox" />
            <span>Medical Doctor</span>
          </div>

          <div className={education.checkBox}>
            <input type="checkbox" />
            <span>PHD</span>
          </div>

          <div className={education.checkBox}>
            <input type="checkbox" />
            <span>Associate Professor</span>
          </div>

          <div className={education.checkBox}>
            <input type="checkbox" />
            <span>Professor</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
