import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import CartLeft from "../components/cart-left";
import OrderList from "../components/order-list";
import Footer from "../components/footer";
import styles from "./product-cart-page.module.css";
const ProductCartPage: FunctionComponent = () => {
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
    <div className={styles.productCartPage}>
      <Header
        vector="/vector.svg"
        logoBackground="/logobackground@2x.png"
        vector1="/vector2.svg"
        toysDecorColor="#fc8f8d"
        memberSectionColor="#313131"
        onLogoClick={onLogoClick}
        onBoysGirlsClick={onBoysGirlsClick}
        onToysDecorClick={onToysDecorClick}
        onAboutClick={onAboutClick}
        onContactClick={onContactClick}
      />
      <div className={styles.cart}>
        <div className={styles.container}>
          <CartLeft />
          <OrderList />
        </div>
      </div>
      <Footer
        insta="/insta@2x.png"
        faceBook="/facebook@2x.png"
        pinter="/pinter@2x.png"
        propZIndex="unset"
      />
    </div>
  );
};

export default ProductCartPage;
