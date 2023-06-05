import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./category-sale.module.css";
const CategorySale: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/boysgirlspage");
  }, [navigate]);

  return (
    <div className={styles.categorySale}>
      <img className={styles.bgIcon} alt="" src="/bg.svg" />
      <div className={styles.title}>
        <div className={styles.summer}>Summer</div>
        <div className={styles.sale}>Sale</div>
      </div>
      <div className={styles.content}>
        <div className={styles.off}>40% Off</div>
        <div className={styles.springsummer}>Spring / Summer</div>
        <div className={styles.clothing}>Clothing!</div>
      </div>
      <button className={styles.button} onClick={onButtonClick}>
        <div className={styles.shopNow}>Shop Now</div>
      </button>
    </div>
  );
};

export default CategorySale;
