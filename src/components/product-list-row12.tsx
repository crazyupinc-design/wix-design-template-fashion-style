import { FunctionComponent, useState, useCallback } from "react";
import DetailPopup from "./detail-popup";
import PortalPopup from "./portal-popup";
import { useNavigate } from "react-router-dom";
import styles from "./product-list-row12.module.css";
const ProductListRow12: FunctionComponent = () => {
  const [isDetailPopupOpen, setDetailPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openDetailPopup = useCallback(() => {
    setDetailPopupOpen(true);
  }, []);

  const closeDetailPopup = useCallback(() => {
    setDetailPopupOpen(false);
  }, []);

  const onProductClick = useCallback(() => {
    navigate("/productdetailpage");
  }, [navigate]);

  return (
    <>
      <div className={styles.productListRow1}>
        <div className={styles.product1}>
          <div className={styles.product} onClick={onProductClick}>
            <img
              className={styles.detailPageLandingImageIcon}
              alt=""
              src="/detailpagelandingimage2@2x.png"
            />
          </div>
          <div className={styles.newMark}>
            <div className={styles.new}>N e w</div>
          </div>
          <div className={styles.productNamePrice}>
            <div className={styles.name}>I'm a product</div>
            <div className={styles.price}>₩20</div>
          </div>
          <button className={styles.plusCircle} onClick={openDetailPopup}>
            <img className={styles.vectorIcon} alt="" src="/vector10.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector11.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector12.svg" />
          </button>
        </div>
        <div className={styles.product2}>
          <img
            className={styles.detailPageLandingImageIcon1}
            alt=""
            src="/detailpagelandingimage3@2x.png"
          />
          <div className={styles.newMark1}>
            <div className={styles.new}>N e w</div>
          </div>
          <div className={styles.productNamePrice}>
            <div className={styles.name}>I'm a product</div>
            <div className={styles.price}>₩20</div>
          </div>
        </div>
        <div className={styles.product2}>
          <img className={styles.productIcon} alt="" src="/product@2x.png" />
          <div className={styles.newMark1}>
            <div className={styles.new}>N e w</div>
          </div>
          <div className={styles.productNamePrice}>
            <div className={styles.name}>I'm a product</div>
            <div className={styles.price}>₩20</div>
          </div>
        </div>
      </div>
      {isDetailPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.6)"
          placement="Centered"
          onOutsideClick={closeDetailPopup}
        >
          <DetailPopup onClose={closeDetailPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default ProductListRow12;
