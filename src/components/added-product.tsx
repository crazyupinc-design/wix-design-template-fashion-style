import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./added-product.module.css";
const AddedProduct: FunctionComponent = () => {
  const navigate = useNavigate();

  const onProduct1Click = useCallback(() => {
    navigate("/productdetailpage");
  }, [navigate]);

  return (
    <div className={styles.addedProduct}>
      <img
        className={styles.detailPageLandingImageIcon}
        alt=""
        src="/detailpagelandingimage1@2x.png"
      />
      <div className={styles.product1} onClick={onProduct1Click}>
        <div className={styles.productNamePrice}>
          <div className={styles.name}>I'm a product</div>
          <div className={styles.price}>₩20</div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div}>-</div>
          <div className={styles.div}>1</div>
          <div className={styles.div}>+</div>
        </div>
      </div>
      <img className={styles.xCircleIcon} alt="" src="/xcircle.svg" />
    </div>
  );
};

export default AddedProduct;
