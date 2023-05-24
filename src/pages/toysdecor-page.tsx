import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./toysdecor-page.module.css";
const ToysdecorPage: FunctionComponent = () => {
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
    <div className={styles.toysdecorPage}>
      <Header
        vector="/vector8.svg"
        vector1="/vector9.svg"
        aboutColor="#fc8f8d"
        memberSectionColor="#313131"
        onLogoClick={onLogoClick}
        onBoysGirlsClick={onBoysGirlsClick}
        onToysDecorClick={onToysDecorClick}
        onAboutClick={onAboutClick}
        onContactClick={onContactClick}
      />
      <div className={styles.titleSection}>
        <div className={styles.title}>
          <img className={styles.vectorIcon} alt="" src="/vector14.svg" />
          <div className={styles.boysgirls}>{`Toys & Decor`}</div>
        </div>
      </div>
      <div className={styles.productSection}>
        <div className={styles.productListRow1}>
          <div className={styles.product1}>
            <img className={styles.productIcon} alt="" src="/product5@2x.png" />
            <div className={styles.newMark}>
              <div className={styles.new}>N e w</div>
            </div>
            <div className={styles.productNamePrice}>
              <div className={styles.name}>I'm a product</div>
              <div className={styles.price}>₩20</div>
            </div>
          </div>
          <div className={styles.product1}>
            <img
              className={styles.detailPageLandingImageIcon}
              alt=""
              src="/detailpagelandingimage6@2x.png"
            />
            <div className={styles.newMark1}>
              <div className={styles.new}>N e w</div>
            </div>
            <div className={styles.productNamePrice}>
              <div className={styles.name}>I'm a product</div>
              <div className={styles.price}>₩20</div>
            </div>
          </div>
          <div className={styles.product1}>
            <img
              className={styles.detailPageLandingImageIcon}
              alt=""
              src="/detailpagelandingimage7@2x.png"
            />
            <div className={styles.newMark}>
              <div className={styles.new}>Sale</div>
            </div>
            <div className={styles.productNamePrice}>
              <div className={styles.name}>I'm a product</div>
              <div className={styles.price}>₩20</div>
            </div>
          </div>
        </div>
        <div className={styles.productListRow1}>
          <div className={styles.product1}>
            <img className={styles.productIcon} alt="" src="/product6@2x.png" />
            <div className={styles.newMark1}>
              <div className={styles.new}>N e w</div>
            </div>
            <div className={styles.productNamePrice}>
              <div className={styles.name}>I'm a product</div>
              <div className={styles.price}>₩20</div>
            </div>
          </div>
          <div className={styles.product1}>
            <img
              className={styles.detailPageLandingImageIcon}
              alt=""
              src="/detailpagelandingimage8@2x.png"
            />
            <div className={styles.newMark1}>
              <div className={styles.new}>N e w</div>
            </div>
            <div className={styles.productNamePrice}>
              <div className={styles.name}>I'm a product</div>
              <div className={styles.price}>₩20</div>
            </div>
          </div>
          <div className={styles.product1}>
            <img className={styles.productIcon} alt="" src="/product7@2x.png" />
            <div className={styles.newMark1}>
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

export default ToysdecorPage;
