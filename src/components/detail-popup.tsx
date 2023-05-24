import { FunctionComponent } from "react";
import ProductDetailRight from "./product-detail-right";
import styles from "./detail-popup.module.css";

type DetailPopupType = {
  onClose?: () => void;
};

const DetailPopup: FunctionComponent<DetailPopupType> = ({ onClose }) => {
  return (
    <div className={styles.detailPopup}>
      <div className={styles.productDetail}>
        <div className={styles.productPhoto}>
          <div className={styles.col}>
            <img className={styles.imgIcon} alt="" src="/img1@2x.png" />
            <div className={styles.colorSelect}>
              <div className={styles.color2}>
                <img className={styles.redIcon} alt="" src="/red@2x.png" />
              </div>
              <div className={styles.color2}>
                <img className={styles.redIcon} alt="" src="/green@2x.png" />
              </div>
            </div>
          </div>
        </div>
        <ProductDetailRight />
      </div>
    </div>
  );
};

export default DetailPopup;
