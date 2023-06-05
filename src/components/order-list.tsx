import { FunctionComponent, useState, useCallback } from "react";
import UnableOrderPopup from "./unable-order-popup";
import PortalPopup from "./portal-popup";
import styles from "./order-list.module.css";
const OrderList: FunctionComponent = () => {
  const [isUnableOrderPopupOpen, setUnableOrderPopupOpen] = useState(false);

  const openUnableOrderPopup = useCallback(() => {
    setUnableOrderPopupOpen(true);
  }, []);

  const closeUnableOrderPopup = useCallback(() => {
    setUnableOrderPopupOpen(false);
  }, []);

  return (
    <>
      <form className={styles.orderList}>
        <div className={styles.title}>
          <div className={styles.orderList1}>주문 내역</div>
        </div>
        <div className={styles.content}>
          <div className={styles.total}>
            <div className={styles.totalPriceParent}>
              <div className={styles.totalPrice}>
                <div className={styles.total1}>소계</div>
                <div className={styles.price}>₩20</div>
              </div>
              <div className={styles.deliveryCharge}>예상배송비</div>
            </div>
            <img className={styles.xCircleIcon} alt="" src="/xcircle11.svg" />
          </div>
        </div>
        <div className={styles.totalPrice}>
          <div className={styles.name}>합계</div>
          <div className={styles.nameWrapper}>
            <div className={styles.name1}>₩20</div>
          </div>
        </div>
        <button className={styles.butoon} onClick={openUnableOrderPopup}>
          <div className={styles.checkOut}>체크아웃</div>
        </button>
        <div className={styles.safePayment}>안전 결제</div>
      </form>
      {isUnableOrderPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.6)"
          placement="Centered"
          onOutsideClick={closeUnableOrderPopup}
        >
          <UnableOrderPopup onClose={closeUnableOrderPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default OrderList;
