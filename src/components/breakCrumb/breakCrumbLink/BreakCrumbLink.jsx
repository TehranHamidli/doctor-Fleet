import Link from "next/link";
import breakLink from "./breakCrumbLink.module.css";
import Image from "next/image";
import rightIcon from "/src/images/righ-arrow-icon.svg";

function BreakCrumbLink() {
  return (
    <>
      <div className={breakLink.breakCrumbLink}>
        <Link href="/home">Home</Link>
        <Image src={rightIcon} />
        <Link href="/plastic">Plastic</Link>
        <Image src={rightIcon} />
        <Link href="/rinoplastica">Rinoplastica</Link>
        <Image src={rightIcon} />
        <Link href="/surgery" className={breakLink.surgery}>
          Surgery
        </Link>
      </div>
    </>
  );
}

export default BreakCrumbLink;
