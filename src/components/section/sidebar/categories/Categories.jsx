import categories from "./categories.module.css";

function Categories() {
  return (
    <>
      <div className={categories.categoriesContainer}>
        <div className={categories.categoriesName}>
          <p>Categories</p>
        </div>
        <div className={categories.categoriesCheckbox}>
          <div className={categories.category}>
            <input type="checkbox" />
            <span>Plastic Surgery</span>
          </div>

          <div className={categories.subCategory}>
            <input type="checkbox" />
            <span>Sub Category 3</span>
          </div>

          <div className={categories.subCategory}>
            <input type="checkbox" />
            <span>Sub Category 2</span>
          </div>

          <div className={categories.subCategory}>
            <input type="checkbox" />
            <span>Sub Category 3</span>
          </div>

          <div className={categories.border}></div>

          <div className={categories.category}>
            <input type="checkbox" />
            <span>Artificial insemination</span>
          </div>

          <div className={categories.category}>
            <input type="checkbox" />
            <span>Hair Transplant</span>
          </div>
          <div className={categories.category}>
            <input type="checkbox" />
            <span>Dentist</span>
          </div>
          <div className={categories.category}>
            <input type="checkbox" />
            <span>Eye</span>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default Categories;
