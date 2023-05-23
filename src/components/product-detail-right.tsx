import { FunctionComponent, useState, useCallback } from "react";
import DrawerAddedCart from "./drawer-added-cart";
import PortalDrawer from "./portal-drawer";
import styles from "./product-detail-right.module.css";
const ProductDetailRight: FunctionComponent = () => {
  const [isDrawerAddedCartOpen, setDrawerAddedCartOpen] = useState(false);

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
            <div className={styles.input}>
              <div className={styles.div}>1</div>
            </div>
          </div>
        </div>
        <div className={styles.col1}>
          <button className={styles.butoon} onClick={openDrawerAddedCart}>
            <div className={styles.addCart}>카트에 추가</div>
          </button>
        </div>
      </div>
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

export default ProductDetailRight;
