import { FunctionComponent } from "react";
import styles from "./unable-order-popup.module.css";

type UnableOrderPopupType = {
  onClose?: () => void;
};

const UnableOrderPopup: FunctionComponent<UnableOrderPopupType> = ({
  onClose,
}) => {
  return (
    <div className={styles.unableOrderPopup}>
      <div className={styles.div}>온라인 주문 접수 불가</div>
      <div className={styles.div1}>구매를 완료하려면 직접 연락해 주세요</div>
      <button className={styles.buttonBuy} onClick={onClose}>
        <div className={styles.buy}>확인</div>
      </button>
    </div>
  );
};

export default UnableOrderPopup;
