import { FunctionComponent } from "react";
import styles from "./memo-popup.module.css";

type MemoPopupType = {
  onClose?: () => void;
};

const MemoPopup: FunctionComponent<MemoPopupType> = ({ onClose }) => {
  return (
    <div className={styles.memoPopup}>
      <div className={styles.col}>
        <div className={styles.memo}>
          <img className={styles.fileTextIcon} alt="" src="/filetext1.svg" />
          <div className={styles.addMemo}>메모추가</div>
        </div>
        <input
          className={styles.inputBox}
          type="text"
          placeholder="특별한 지침 및 요구사항을 메모로 남겨주세요."
        />
      </div>
    </div>
  );
};

export default MemoPopup;
