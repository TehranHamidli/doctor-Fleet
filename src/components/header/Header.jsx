import Image from "next/image";
import logo from "/src/images/logo.png";
import globus from "/src/images/globus-icon.png";
import notification from "/src/images/notficition.png";
import user from "/src/images/user.png";
import userIcon from "/src/images/userIcon.png";
import burgerIcon from "/src/images/burgerIcon.png";
import styles from "./header.module.css";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className={styles.mobileMenu}>
        <div className={styles.mobileLogo}>
          <Image src={logo} />
        </div>
        <div className={styles.menuIcons}>
          <div className={styles.mobileNotf}>
            <Image src={notification} />
          </div>
          <div className={styles.mobileUser}>
            <Image src={userIcon} />
          </div>
          <div className={styles.mobileBurger}>
            <Image src={burgerIcon} />
          </div>
        </div>
      </div>
      <header className={styles.header}>
        <div className={styles.menuItems}>
          <div className={styles.logo}>
            <Image src={logo} alt="Logo" />
          </div>
          <div className={styles.navLink}>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>

        <div className={styles.headerRight}>
          <div className={styles.language}>
            <Image src={globus} />
            <p>Language</p>
          </div>
          <div className={styles.listDoctor}>
            <p>List Doctor</p>
          </div>
          <div className={styles.notification}>
            <Image src={notification} />
          </div>
          <div className={styles.user}>
            <Image src={user} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
