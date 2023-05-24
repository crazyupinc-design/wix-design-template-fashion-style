import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import ProductListRow12 from "../components/product-list-row12";
import Footer from "../components/footer";
import styles from "./boysgirls-page.module.css";
const BoysgirlsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBoysGirlsClick = useCallback(() => {
    navigate("/boysgirlspage");
  }, [navigate]);

  const onToysDecorClick = useCallback(() => {
    navigate("/toysdecorpage");
  }, [navigate]);

  const onAboutClick = useCallback(() => {
    navigate("/aboutpage");
  }, [navigate]);

  const onContactClick = useCallback(() => {
    navigate("/aboutpage1");
  }, [navigate]);

  return (
    <div className={styles.boysgirlsPage}>
      <Header
        vector="/vector.svg"
        vector1="/vector21.svg"
        toysDecorColor="#fc8f8d"
        memberSectionColor="#313131"
        onLogoClick={onLogoClick}
        onBoysGirlsClick={onBoysGirlsClick}
        onToysDecorClick={onToysDecorClick}
        onAboutClick={onAboutClick}
        onContactClick={onContactClick}
      />
      <div className={styles.titleSection}>
        <div className={styles.title}>
          <img className={styles.bgIcon} alt="" src="/bg4.svg" />
          <div className={styles.boysgirls}>{`Boys & Girls`}</div>
        </div>
      </div>
      <div className={styles.productSection}>
        <ProductListRow12 />
        <div className={styles.productListRow1}>
          <div className={styles.product4}>
            <img className={styles.productIcon} alt="" src="/product1@2x.png" />
            <div className={styles.newMark}>
              <div className={styles.new}>N e w</div>
            </div>
            <div className={styles.productNamePrice}>
              <div className={styles.name}>I'm a product</div>
              <div className={styles.price}>₩20</div>
            </div>
          </div>
          <div className={styles.product4}>
            <img
              className={styles.detailPageLandingImageIcon}
              alt=""
              src="/detailpagelandingimage4@2x.png"
            />
            <div className={styles.newMark}>
              <div className={styles.new}>N e w</div>
            </div>
            <div className={styles.productNamePrice}>
              <div className={styles.name}>I'm a product</div>
              <div className={styles.price}>₩20</div>
            </div>
          </div>
          <div className={styles.product4}>
            <img className={styles.productIcon} alt="" src="/product2@2x.png" />
            <div className={styles.newMark2}>
              <div className={styles.new}>Sale</div>
            </div>
            <div className={styles.productNamePrice}>
              <div className={styles.name}>I'm a product</div>
              <div className={styles.price}>₩20</div>
            </div>
          </div>
        </div>
        <div className={styles.productListRow11}>
          <div className={styles.product4}>
            <img className={styles.productIcon} alt="" src="/product3@2x.png" />
            <div className={styles.newMark}>
              <div className={styles.new}>N e w</div>
            </div>
            <div className={styles.productNamePrice}>
              <div className={styles.name}>I'm a product</div>
              <div className={styles.price}>₩20</div>
            </div>
          </div>
          <div className={styles.product4}>
            <img
              className={styles.detailPageLandingImageIcon}
              alt=""
              src="/detailpagelandingimage5@2x.png"
            />
            <div className={styles.newMark}>
              <div className={styles.new}>N e w</div>
            </div>
            <div className={styles.productNamePrice}>
              <div className={styles.name}>I'm a product</div>
              <div className={styles.price}>₩20</div>
            </div>
          </div>
          <div className={styles.product4}>
            <img className={styles.productIcon} alt="" src="/product4@2x.png" />
            <div className={styles.newMark2}>
              <div className={styles.new}>Sale</div>
            </div>
            <div className={styles.productNamePrice}>
              <div className={styles.name}>I'm a product</div>
              <div className={styles.price}>₩20</div>
            </div>
          </div>
        </div>
      </div>
      <Footer propZIndex="unset" />
    </div>
  );
};

export default BoysgirlsPage;
