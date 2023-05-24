import { FunctionComponent, useState, useCallback } from "react";
import UnableOrderPopup from "../components/unable-order-popup";
import PortalPopup from "../components/portal-popup";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import DrawerAddedCart from "../components/drawer-added-cart";
import PortalDrawer from "../components/portal-drawer";
import Footer from "../components/footer";
import styles from "./product-detail-page.module.css";
const ProductDetailPage: FunctionComponent = () => {
  const [isUnableOrderPopupOpen, setUnableOrderPopupOpen] = useState(false);
  const navigate = useNavigate();
  const [isDrawerAddedCartOpen, setDrawerAddedCartOpen] = useState(false);

  const openUnableOrderPopup = useCallback(() => {
    setUnableOrderPopupOpen(true);
  }, []);

  const closeUnableOrderPopup = useCallback(() => {
    setUnableOrderPopupOpen(false);
  }, []);

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

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBoysGirls1Click = useCallback(() => {
    navigate("/boysgirlspage");
  }, [navigate]);

  const openDrawerAddedCart = useCallback(() => {
    setDrawerAddedCartOpen(true);
  }, []);

  const closeDrawerAddedCart = useCallback(() => {
    setDrawerAddedCartOpen(false);
  }, []);

  return (
    <>
      <div className={styles.productDetailPage}>
        <Header
          vector="/vector.svg"
          vector1="/vector9.svg"
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
            <div className={styles.col}>
              <div className={styles.parent}>
                <button className={styles.button} onClick={onButtonClick}>
                  메인
                </button>
                <button
                  className={styles.button}
                  onClick={onBoysGirls1Click}
                >{`/ Boys & Girls`}</button>
                <div className={styles.imAProductContainer}>
                  <span>{`/ `}</span>
                  <span className={styles.imAProduct}>I'm a product</span>
                </div>
              </div>
              <img className={styles.imgIcon} alt="" src="/img1@2x.png" />
              <div className={styles.colorSelect}>
                <div className={styles.color2}>
                  <img className={styles.redIcon} alt="" src="/red@2x.png" />
                </div>
                <div className={styles.color2}>
                  <img className={styles.redIcon} alt="" src="/green@2x.png" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productDetailRight}>
            <div className={styles.productName}>I'm a product</div>
            <div className={styles.productNumber}>SKU: 0007</div>
            <div className={styles.price}>₩20</div>
            <div className={styles.col1}>
              <div className={styles.size}>
                <div className={styles.title}>Size</div>
                <select className={styles.sizeSelectBox}>
                  <option value="3y">3 y</option>
                  <option value="4y">4 y</option>
                  <option value="5y">5 y</option>
                </select>
              </div>
              <div className={styles.quantity}>
                <div className={styles.imAProductContainer}>수량</div>
                <input
                  className={styles.input}
                  type="number"
                  placeholder="1"
                  min={1}
                />
              </div>
            </div>
            <div className={styles.col2}>
              <button className={styles.butoon} onClick={openDrawerAddedCart}>
                <div className={styles.addCart}>카트에 추가</div>
              </button>
              <div className={styles.addFavorite}>
                <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
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
                  <p className={styles.informationAboutYour}>
                    I'm a product detail. I'm a great place to add more
                  </p>
                  <p className={styles.informationAboutYour}>
                    information about your product such as sizing,
                  </p>
                  <p className={styles.informationAboutYour}>
                    material, care and cleaning instructions. This is also
                  </p>
                  <p className={styles.informationAboutYour}>
                    a great space to write what makes this product
                  </p>
                  <p className={styles.informationAboutYour}>
                    special and how your customers can benefit from
                  </p>
                  <p className={styles.informationAboutYour}>
                    this item. Buyers like to know what they’re getting
                  </p>
                  <p className={styles.informationAboutYour}>
                    before they purchase, so give them as much
                  </p>
                  <p className={styles.informationAboutYour}>
                    information as possible so they can buy with
                  </p>
                  <p className={styles.informationAboutYour}>
                    confidence and certainty.
                  </p>
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
                  <p className={styles.informationAboutYour}>
                    I’m a Return and Refund policy. I’m a great place to
                  </p>
                  <p className={styles.informationAboutYour}>
                    let your customers know what to do in case they are
                  </p>
                  <p className={styles.informationAboutYour}>
                    dissatisfied with their purchase. Having a
                  </p>
                  <p className={styles.informationAboutYour}>
                    straightforward refund or exchange policy is a great
                  </p>
                  <p className={styles.informationAboutYour}>
                    way to build trust and reassure your customers that
                  </p>
                  <p className={styles.informationAboutYour}>
                    they can buy with confidence.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Footer propZIndex="unset" />
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

export default ProductDetailPage;
