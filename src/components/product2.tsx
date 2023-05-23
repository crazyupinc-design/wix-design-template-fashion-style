import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./product2.module.css";

type Product2Type = {
  detailPageLandingImage?: string;

  /** Style props */
  propPosition?: Property.Position;
};

const Product2: FunctionComponent<Product2Type> = ({
  detailPageLandingImage,
  propPosition,
}) => {
  const detailPageLandingImageIconStyle: CSS.Properties = useMemo(() => {
    return {
      position: propPosition,
    };
  }, [propPosition]);

  return (
    <div className={styles.product2}>
      <img
        className={styles.detailPageLandingImageIcon}
        alt=""
        src={detailPageLandingImage}
        style={detailPageLandingImageIconStyle}
      />
      <div className={styles.newMark}>
        <div className={styles.new}>N e w</div>
      </div>
      <div className={styles.productNamePrice}>
        <div className={styles.name}>I'm a product</div>
        <div className={styles.price}>₩20</div>
      </div>
    </div>
  );
};

export default Product2;
