import GoHomeButton from "./goHomeButton/GoHomeButton";
import breakCrumb from "./breakCrumb.module.css"
import BreakCrumbLink from "./breakCrumbLink/BreakCrumbLink";


function BreakCrumb(){
    return(
        <div  className={breakCrumb.breakCrumbContainer}>
    <GoHomeButton />

    <BreakCrumbLink />
        </div>
    )
}

export default BreakCrumb;