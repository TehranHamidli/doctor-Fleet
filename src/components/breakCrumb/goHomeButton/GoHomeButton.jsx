import Image from "next/image";
import leftIcon from "/src/images/left-arrow-icon.png"
import GoHome from './goHome.module.css';
function GoHomeButton (){
    return(
        <>
        <div className={GoHome.goHomeButton}>
            <Image className={GoHome.leftIcon} src={leftIcon}/>
            <p>Go home</p>
        </div>
     
        </>
    )
}

export default GoHomeButton;