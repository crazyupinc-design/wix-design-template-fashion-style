import { FunctionComponent } from "react";
import styles from "./col.module.css";
const Col: FunctionComponent = () => {
  return (
    <div className={styles.col}>
      <div className={styles.couponCode}>
        <img className={styles.tagIcon} alt="" src="/tag1.svg" />
        <div className={styles.couponCodeButton}>쿠폰 코드 입력</div>
      </div>
      <div className={styles.col1}>
        <input
          className={styles.inputBox}
          type="text"
          placeholder="프로모션 코드를 입력하세요"
        />
        <div className={styles.button}>
          <div className={styles.couponCodeButton}>적용</div>
        </div>
      </div>
    </div>
  );
};

export default Col;
