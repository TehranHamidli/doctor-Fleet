import Countries from "./countries/Countries";
import Categories from "./categories/Categories"
import sidebar from "./sidebar.module.css"
import Education from "./education/Education";
import Rate from "./rate/Rate";
import Price from "./price/Price";

function Sidebar() {
  return (
    <div className={sidebar.sidebarContainer}>
    <Countries />
    <Categories />
    <Education />
    <Rate />
    <Price />
    </div>
  )
}

export default Sidebar;
