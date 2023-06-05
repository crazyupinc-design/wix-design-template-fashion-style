import { FunctionComponent, useState, useCallback } from "react";
import { TextField } from "@mui/material";
import UnableOrderPopup from "../components/unable-order-popup";
import PortalPopup from "../components/portal-popup";
import ChattingPopup from "../components/chatting-popup";
import DrawerEmptyCart from "../components/drawer-empty-cart";
import PortalDrawer from "../components/portal-drawer";
import { useNavigate } from "react-router-dom";
import PhoneMenuPage from "../components/phone-menu-page";
import DrawerAddedCart from "../components/drawer-added-cart";
import styles from "./product-detail-page.module.css";
const ProductDetailPage: FunctionComponent = () => {
  const [isUnableOrderPopupOpen, setUnableOrderPopupOpen] = useState(false);
  const [isChattingPopupOpen, setChattingPopupOpen] = useState(false);
  const [isDrawerEmptyCartOpen, setDrawerEmptyCartOpen] = useState(false);
  const navigate = useNavigate();
  const [isDrawerEmptyCart1Open, setDrawerEmptyCart1Open] = useState(false);
  const [isPhoneMenuPageOpen, setPhoneMenuPageOpen] = useState(false);
  const [isDrawerAddedCartOpen, setDrawerAddedCartOpen] = useState(false);

  const openUnableOrderPopup = useCallback(() => {
    setUnableOrderPopupOpen(true);
  }, []);

  const closeUnableOrderPopup = useCallback(() => {
    setUnableOrderPopupOpen(false);
  }, []);

  const openChattingPopup = useCallback(() => {
    setChattingPopupOpen(true);
  }, []);

  const closeChattingPopup = useCallback(() => {
    setChattingPopupOpen(false);
  }, []);

  const openDrawerEmptyCart = useCallback(() => {
    setDrawerEmptyCartOpen(true);
  }, []);

  const closeDrawerEmptyCart = useCallback(() => {
    setDrawerEmptyCartOpen(false);
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

  const onContactClick = useCallback(() => {
    navigate("/aboutpage");
  }, [navigate]);

  const openDrawerEmptyCart1 = useCallback(() => {
    setDrawerEmptyCart1Open(true);
  }, []);

  const closeDrawerEmptyCart1 = useCallback(() => {
    setDrawerEmptyCart1Open(false);
  }, []);

  const openPhoneMenuPage = useCallback(() => {
    setPhoneMenuPageOpen(true);
  }, []);

  const closePhoneMenuPage = useCallback(() => {
    setPhoneMenuPageOpen(false);
  }, []);

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

  const onInstaClick = useCallback(() => {
    window.open("https://www.instagram.com/");
  }, []);

  const onFaceBookClick = useCallback(() => {
    window.open("https://www.facebook.com/");
  }, []);

  const onPinterClick = useCallback(() => {
    window.open("https://www.pinterest.co.kr/");
  }, []);

  return (
    <>
      <div className={styles.productDetailPage}>
        <header className={styles.headerNavigation}>
          <button className={styles.cartIcon} onClick={openDrawerEmptyCart}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
            <div className={styles.div}>0</div>
          </button>
          <div className={styles.logo} id="logo" onClick={onLogoClick}>
            <img
              className={styles.logoBackgroundIcon}
              alt=""
              src="/logobackground@2x.png"
            />
            <div className={styles.just4Kids}>Just 4 Kids</div>
          </div>
          <div className={styles.navigationMenu}>
            <a className={styles.navigationLink}>
              <div
                className={styles.boysGirls}
                onClick={onBoysGirlsClick}
              >{`Boys & Girls`}</div>
              <div
                className={styles.toysDecor}
                onClick={onToysDecorClick}
              >{`Toys & Decor`}</div>
              <div className={styles.about}>About</div>
              <div className={styles.contact} onClick={onContactClick}>
                Contact
              </div>
            </a>
            <article className={styles.memberSection}>
              <div className={styles.logIn}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.div1}>로그인</div>
              </div>
              <button
                className={styles.cartIcon1}
                onClick={openDrawerEmptyCart1}
              >
                <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
                <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
                <div className={styles.div}>0</div>
              </button>
            </article>
          </div>
          <img
            className={styles.hambugerMenuIcon}
            alt=""
            src="/hambugermenu.svg"
            onClick={openPhoneMenuPage}
          />
        </header>
        <div className={styles.productDetail}>
          <div className={styles.productPhoto}>
            <div className={styles.menu}>
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
                <img className={styles.redIcon} alt="" src="/red1@2x.png" />
              </div>
              <div className={styles.color2}>
                <img className={styles.redIcon} alt="" src="/green1@2x.png" />
              </div>
            </div>
          </div>
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
                <div className={styles.imAProductContainer}>수량</div>
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
              <button className={styles.addFavorite}>
                <img className={styles.vectorIcon4} alt="" src="/vector5.svg" />
                <img
                  className={styles.vectorPressedIcon}
                  alt=""
                  src="/vectorpressed.svg"
                />
              </button>
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
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item. Buyers like to know what they’re getting before they
                purchase, so give them as much information as possible so they
                can buy with confidence and certainty.
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
                I’m a Return and Refund policy. I’m a great place to let your
                customers know what to do in case they are dissatisfied with
                their purchase. Having a straightforward refund or exchange
                policy is a great way to build trust and reassure your customers
                that they can buy with confidence.
              </div>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.footerLinksParent}>
            <div className={styles.footerLinks}>
              <div className={styles.col11}>
                <div className={styles.col12}>
                  <div className={styles.contactUs}>Contact Us</div>
                  <div className={styles.listItems}>
                    <div className={styles.addressStreet}>
                      500 Terry Francine Street
                    </div>
                    <div className={styles.policy}>San Francisco, CA 94158</div>
                    <div className={styles.policy}>info@my-domain.com</div>
                    <div className={styles.tel}>Tel: 123-456-7890</div>
                  </div>
                </div>
                <div className={styles.col2}>
                  <div className={styles.storeHours}>Store Hours</div>
                  <div className={styles.listTime}>
                    <div className={styles.monFri}>Mon - Fri: 7am - 10pm</div>
                    <div className={styles.saturday}>Saturday: 8am - 10pm</div>
                    <div className={styles.saturday}>Sunday: 8am - 11pm</div>
                  </div>
                </div>
              </div>
              <div className={styles.col21}>
                <div className={styles.col3}>
                  <div className={styles.help}>Help</div>
                  <div className={styles.listContact}>
                    <div
                      className={styles.termsconditions}
                    >{`Terms & Conditions`}</div>
                    <div
                      className={styles.termsconditions}
                    >{`Shipping & Returns`}</div>
                    <div className={styles.termsconditions}>Payment Method</div>
                    <div className={styles.termsconditions}>FAQ</div>
                  </div>
                </div>
                <div className={styles.div3}>
                  <div className={styles.joinOurMailing}>
                    Join Our Mailing List
                  </div>
                  <TextField
                    className={styles.inputBox}
                    sx={{ width: 307 }}
                    color="primary"
                    variant="outlined"
                    type="text"
                    label="Enter your email here*"
                    placeholder="Enter your email here*"
                    size="medium"
                    margin="none"
                  />
                  <button className={styles.button1}>
                    <div className={styles.subscribeNow}>Subscribe Now</div>
                    <div className={styles.thanksForSubmitting}>
                      Thanks for submitting!
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.snsParent}>
              <div className={styles.sns}>
                <button className={styles.insta} onClick={onInstaClick} />
                <button className={styles.faceBook} onClick={onFaceBookClick} />
                <button className={styles.pinter} onClick={onPinterClick} />
              </div>
              <div className={styles.licenseMark}>
                <div className={styles.license}>
                  © 2035 by Just 4 Kids. Powered and secured by Wix
                </div>
              </div>
            </div>
            <button className={styles.buttonChat} onClick={openChattingPopup}>
              <img className={styles.icon} alt="" src="/frame2.svg" />
              <div className={styles.text}>
                <div className={styles.chattingService}>채팅 서비스</div>
              </div>
            </button>
          </div>
        </footer>
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
      {isChattingPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.6)"
          placement="Bottom right"
          onOutsideClick={closeChattingPopup}
        >
          <ChattingPopup onClose={closeChattingPopup} />
        </PortalPopup>
      )}
      {isDrawerEmptyCartOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeDrawerEmptyCart}
        >
          <DrawerEmptyCart onClose={closeDrawerEmptyCart} />
        </PortalDrawer>
      )}
      {isDrawerEmptyCart1Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeDrawerEmptyCart1}
        >
          <DrawerEmptyCart onClose={closeDrawerEmptyCart1} />
        </PortalDrawer>
      )}
      {isPhoneMenuPageOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closePhoneMenuPage}
        >
          <PhoneMenuPage onClose={closePhoneMenuPage} />
        </PortalDrawer>
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
