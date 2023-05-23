import { FunctionComponent, useState, useCallback } from "react";
import UnableOrderPopup from "./unable-order-popup";
import PortalPopup from "./portal-popup";
import DrawerAddedCart from "./drawer-added-cart";
import PortalDrawer from "./portal-drawer";
import styles from "./product-detail-right1.module.css";
const ProductDetailRight1: FunctionComponent = () => {
  const [isUnableOrderPopupOpen, setUnableOrderPopupOpen] = useState(false);
  const [isDrawerAddedCartOpen, setDrawerAddedCartOpen] = useState(false);

  const openUnableOrderPopup = useCallback(() => {
    setUnableOrderPopupOpen(true);
  }, []);

  const closeUnableOrderPopup = useCallback(() => {
    setUnableOrderPopupOpen(false);
  }, []);

  const openDrawerAddedCart = useCallback(() => {
    setDrawerAddedCartOpen(true);
  }, []);

  const closeDrawerAddedCart = useCallback(() => {
    setDrawerAddedCartOpen(false);
  }, []);

  return (
    <>
      <div className={styles.productDetailRight}>
        <div className={styles.productName}>I'm a product</div>
        <div className={styles.productNumber}>SKU: 0007</div>
        <div className={styles.price}>₩20</div>
        <div className={styles.col}>
          <div className={styles.size}>
            <div className={styles.title}>Size</div>
            <select className={styles.sizeSelectBox}>
              <option value="3y">3 y</option>
              <option value="4y">4 y</option>
              <option value="5y">5 y</option>
            </select>
          </div>
          <div className={styles.quantity}>
            <div className={styles.title1}>수량</div>
            <input
              className={styles.input}
              type="number"
              placeholder="1"
              min={1}
            />
          </div>
        </div>
        <div className={styles.col1}>
          <button className={styles.butoon} onClick={openDrawerAddedCart}>
            <div className={styles.addCart}>카트에 추가</div>
          </button>
          <div className={styles.addFavorite}>
            <img className={styles.vectorIcon} alt="" src="/vector9.svg" />
          </div>
        </div>
        <button className={styles.buttonBuy} onClick={openUnableOrderPopup}>
          <div className={styles.buy}>구매하기</div>
        </button>
        <div className={styles.productDescription}>
          <div className={styles.bottomDescription}>
            <div className={styles.titleProductInfo}>PRODUCT INFO</div>
            <img
              className={styles.rectangle2Icon}
              alt=""
              src="/rectangle2.svg"
            />
          </div>
          <div className={styles.info}>
            <span className={styles.infoTxt}>
              <p className={styles.imAProduct}>
                I'm a product detail. I'm a great place to add more
              </p>
              <p className={styles.imAProduct}>
                information about your product such as sizing,
              </p>
              <p className={styles.imAProduct}>
                material, care and cleaning instructions. This is also
              </p>
              <p className={styles.imAProduct}>
                a great space to write what makes this product
              </p>
              <p className={styles.imAProduct}>
                special and how your customers can benefit from
              </p>
              <p className={styles.imAProduct}>
                this item. Buyers like to know what they’re getting
              </p>
              <p className={styles.imAProduct}>
                before they purchase, so give them as much
              </p>
              <p className={styles.imAProduct}>
                information as possible so they can buy with
              </p>
              <p className={styles.imAProduct}>confidence and certainty.</p>
            </span>
          </div>
          <div className={styles.topDescription}>
            <div className={styles.titleReturnPolicy}>
              RETURN AND REFUND POLICY
            </div>
            <img
              className={styles.rectangle2Icon}
              alt=""
              src="/rectangle2.svg"
            />
          </div>
          <div className={styles.policy}>
            <span className={styles.infoTxt}>
              <p className={styles.imAProduct}>
                I’m a Return and Refund policy. I’m a great place to
              </p>
              <p className={styles.imAProduct}>
                let your customers know what to do in case they are
              </p>
              <p className={styles.imAProduct}>
                dissatisfied with their purchase. Having a
              </p>
              <p className={styles.imAProduct}>
                straightforward refund or exchange policy is a great
              </p>
              <p className={styles.imAProduct}>
                way to build trust and reassure your customers that
              </p>
              <p className={styles.imAProduct}>they can buy with confidence.</p>
            </span>
          </div>
        </div>
      </div>
      {isUnableOrderPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUnableOrderPopup}
        >
          <UnableOrderPopup onClose={closeUnableOrderPopup} />
        </PortalPopup>
      )}
      {isDrawerAddedCartOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeDrawerAddedCart}
        >
          <DrawerAddedCart onClose={closeDrawerAddedCart} />
        </PortalDrawer>
      )}
    </>
  );
};

export default ProductDetailRight1;
