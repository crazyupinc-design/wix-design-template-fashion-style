import { FunctionComponent } from "react";
import Col from "./col";
import styles from "./coupon-code-popup.module.css";

type CouponCodePopupType = {
  onClose?: () => void;
};

const CouponCodePopup: FunctionComponent<CouponCodePopupType> = ({
  onClose,
}) => {
  return (
    <div className={styles.couponCodePopup}>
      <Col />
    </div>
  );
};

export default CouponCodePopup;
