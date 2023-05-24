import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./category-toys1.module.css";
const CategoryToys1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButton1Click = useCallback(() => {
    navigate("/toysdecorpage");
  }, [navigate]);

  return (
    <div className={styles.categoryToys1}>
      <img className={styles.bgIcon} alt="" src="/bg11.svg" />
      <div className={styles.title}>
        <div className={styles.newToys}>New Toys</div>
        <div className={styles.collection}>Collection</div>
      </div>
      <button className={styles.button} onClick={onButton1Click}>
        <div className={styles.shopNow}>Shop Now</div>
      </button>
      <img className={styles.bgIcon1} alt="" src="/bg2.svg" />
    </div>
  );
};

export default CategoryToys1;
