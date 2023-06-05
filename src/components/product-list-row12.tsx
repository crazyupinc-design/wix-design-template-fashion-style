import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./product-list-row12.module.css";
const ProductListRow12: FunctionComponent = () => {
  const navigate = useNavigate();

  const onProductClick = useCallback(() => {
    navigate("/productdetailpage");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/detailpopup");
  }, [navigate]);

  const onProduct3Click = useCallback(() => {
    navigate("/productdetailpage");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/detailpopup");
  }, [navigate]);

  return (
    <div className={styles.productListRow1}>
      <div className={styles.product1}>
        <div className={styles.product} onClick={onProductClick}>
          <img
            className={styles.detailPageLandingImageIcon}
            alt=""
            src="/detailpagelandingimage2@2x.png"
          />
          <button className={styles.button} onClick={onButtonClick}>
            <div className={styles.seeDetail}>제품보기</div>
          </button>
        </div>
        <div className={styles.newMark}>
          <div className={styles.new}>N e w</div>
        </div>
        <div className={styles.productNamePrice}>
          <div className={styles.name}>I'm a product</div>
          <div className={styles.price}>₩20</div>
        </div>
      </div>
      <div className={styles.product1}>
        <div className={styles.product3} onClick={onProduct3Click}>
          <img
            className={styles.detailPageLandingImageIcon1}
            alt=""
            src="/detailpagelandingimage3@2x.png"
          />
          <img className={styles.hoverImgIcon} alt="" src="/hoverimg@2x.png" />
          <button className={styles.button1} onClick={onButton1Click}>
            <div className={styles.seeDetail}>제품보기</div>
          </button>
        </div>
        <div className={styles.newMark1}>
          <div className={styles.new}>N e w</div>
        </div>
        <div className={styles.productNamePrice}>
          <div className={styles.name}>I'm a product</div>
          <div className={styles.price}>₩20</div>
        </div>
      </div>
      <div className={styles.product31}>
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
  );
};

export default ProductListRow12;
