import { FunctionComponent, useState, useCallback } from "react";
import CouponCodePopup from "./coupon-code-popup";
import PortalPopup from "./portal-popup";
import MemoPopup from "./memo-popup";
import styles from "./cart-left.module.css";
const CartLeft: FunctionComponent = () => {
  const [isCouponCodePopupOpen, setCouponCodePopupOpen] = useState(false);
  const [isMemoPopupOpen, setMemoPopupOpen] = useState(false);

  const openCouponCodePopup = useCallback(() => {
    setCouponCodePopupOpen(true);
  }, []);

  const closeCouponCodePopup = useCallback(() => {
    setCouponCodePopupOpen(false);
  }, []);

  const openMemoPopup = useCallback(() => {
    setMemoPopupOpen(true);
  }, []);

  const closeMemoPopup = useCallback(() => {
    setMemoPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.cartLeft}>
        <div className={styles.title}>
          <div className={styles.myShoppingCart}>내 쇼핑카트</div>
        </div>
        <div className={styles.content}>
          <div className={styles.addedProduct}>
            <img
              className={styles.detailPageLandingImageIcon}
              alt=""
              src="/detailpagelandingimage4@2x.png"
            />
            <div className={styles.productNamePrice}>
              <div className={styles.name}>I'm a product</div>
              <div className={styles.price}>₩20</div>
            </div>
            <img className={styles.xCircleIcon} alt="" src="/xcircle.svg" />
          </div>
          <div className={styles.quantityPrice}>
            <input
              className={styles.quantity}
              type="number"
              placeholder="1"
              min={1}
            />
            <div className={styles.price1}>₩20</div>
            <img className={styles.xCircleIcon} alt="" src="/x.svg" />
          </div>
        </div>
        <div className={styles.couponCode}>
          <img className={styles.tagIcon} alt="" src="/tag1.svg" />
          <button
            className={styles.couponCodeButton}
            onClick={openCouponCodePopup}
          >
            쿠폰 코드 입력
          </button>
        </div>
        <div className={styles.memo}>
          <img className={styles.tagIcon} alt="" src="/filetext1.svg" />
          <button className={styles.addMemo} onClick={openMemoPopup}>
            메모추가
          </button>
        </div>
      </div>
      {isCouponCodePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.6)"
          placement="Centered"
          onOutsideClick={closeCouponCodePopup}
        >
          <CouponCodePopup onClose={closeCouponCodePopup} />
        </PortalPopup>
      )}
      {isMemoPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.6)"
          placement="Centered"
          onOutsideClick={closeMemoPopup}
        >
          <MemoPopup onClose={closeMemoPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default CartLeft;
