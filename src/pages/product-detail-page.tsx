import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Col1 from "../components/col1";
import ProductDetailRight1 from "../components/product-detail-right1";
import Footer from "../components/footer";
import styles from "./product-detail-page.module.css";
const ProductDetailPage: FunctionComponent = () => {
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
    <div className={styles.productDetailPage}>
      <Header
        vector="/vector8.svg"
        logoBackground="/logobackground1@2x.png"
        vector1="/vector2.svg"
        toysDecorColor="#fc8f8d"
        memberSectionColor="#313131"
        onLogoClick={onLogoClick}
        onBoysGirlsClick={onBoysGirlsClick}
        onToysDecorClick={onToysDecorClick}
        onAboutClick={onAboutClick}
        onContactClick={onContactClick}
      />
      <div className={styles.productDetail}>
        <div className={styles.productPhoto}>
          <Col1 />
        </div>
        <ProductDetailRight1 />
      </div>
      <Footer
        insta="/insta2@2x.png"
        faceBook="/facebook2@2x.png"
        pinter="/pinter2@2x.png"
        propZIndex="unset"
      />
    </div>
  );
};

export default ProductDetailPage;
