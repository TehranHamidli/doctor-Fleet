import BreakCrumb from "@/components/breakCrumb/BreakCrumb";
import Header from "@/components/header/Header";
import styles from './filter.module.css'
import Filters from "@/components/filters/Filters";
import Section from "@/components/section/Section";

function Filter() {
  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <Header />
        <BreakCrumb />
        <Filters />
        <Section />
      </div>
    </div>
  )
}

export default Filter;