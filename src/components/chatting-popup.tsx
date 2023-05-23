import { FunctionComponent } from "react";
import styles from "./chatting-popup.module.css";

type ChattingPopupType = {
  onClose?: () => void;
};

const ChattingPopup: FunctionComponent<ChattingPopupType> = ({ onClose }) => {
  return (
    <div className={styles.chattingPopup}>
      <div className={styles.chattingPopupChild} />
      <input
        className={styles.chattingPopupItem}
        type="text"
        placeholder="메시지를 입력하세요 "
      />
      <div className={styles.div}>최대한 신속하게 응답드리겠습니다.</div>
    </div>
  );
};

export default ChattingPopup;
