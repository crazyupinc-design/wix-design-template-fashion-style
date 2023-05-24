import { FunctionComponent, useState, useCallback } from "react";
import ChattingPopup from "../components/chatting-popup";
import PortalPopup from "../components/portal-popup";
import DrawerEmptyCart from "../components/drawer-empty-cart";
import PortalDrawer from "../components/portal-drawer";
import { useNavigate } from "react-router-dom";
import PhoneMenuPage from "../components/phone-menu-page";
import Banner from "../components/banner";
import CategorySale from "../components/category-sale";
import CategoryToys1 from "../components/category-toys1";
import MiddleCategory from "../components/middle-category";
import styles from "./main-page.module.css";
const MainPage: FunctionComponent = () => {
  const [isChattingPopupOpen, setChattingPopupOpen] = useState(false);
  const [isDrawerEmptyCartOpen, setDrawerEmptyCartOpen] = useState(false);
  const navigate = useNavigate();
  const [isDrawerEmptyCart1Open, setDrawerEmptyCart1Open] = useState(false);
  const [isPhoneMenuPageOpen, setPhoneMenuPageOpen] = useState(false);

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

  const onAboutClick = useCallback(() => {
    navigate("/aboutpage");
  }, [navigate]);

  const onContactClick = useCallback(() => {
    navigate("/aboutpage1");
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

  const onCategoryToys2ImageClick = useCallback(() => {
    navigate("/toysdecorpage");
  }, [navigate]);

  const onLandingImageClick = useCallback(() => {
    navigate("/boysgirlspage");
  }, [navigate]);

  const onCategoryToys3ImageClick = useCallback(() => {
    navigate("/toysdecorpage");
  }, [navigate]);

  const onCategoryBoysGirls3ImageClick = useCallback(() => {
    navigate("/boysgirlspage");
  }, [navigate]);

  const onLandingImage3Click = useCallback(() => {
    navigate("/boysgirlspage");
  }, [navigate]);

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
      <div className={styles.mainPage}>
        <img className={styles.bgImageIcon} alt="" src="/bgimage@2x.png" />
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
              <div className={styles.about} onClick={onAboutClick}>
                About
              </div>
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
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
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
        <Banner />
        <div className={styles.topCategory}>
          <CategorySale />
          <CategoryToys1 />
        </div>
        <div className={styles.middleCategory}>
          <img
            className={styles.categoryToys2Icon}
            alt=""
            src="/categorytoys2@2x.png"
            onClick={onCategoryToys2ImageClick}
          />
          <div className={styles.categoryBoysGirls1}>
            <img
              className={styles.landingImageIcon}
              alt=""
              src="/landingimage@2x.png"
              onClick={onLandingImageClick}
            />
            <div className={styles.title}>
              <div className={styles.new}>N E W</div>
            </div>
          </div>
          <img
            className={styles.categoryToys3Icon}
            alt=""
            src="/categorytoys3@2x.png"
            onClick={onCategoryToys3ImageClick}
          />
        </div>
        <MiddleCategory />
        <div className={styles.bottomCategory}>
          <div className={styles.col}>
            <img
              className={styles.categoryBoysGirls3Icon}
              alt=""
              src="/categoryboysgirls3@2x.png"
              onClick={onCategoryBoysGirls3ImageClick}
            />
          </div>
          <div className={styles.col1}>
            <div className={styles.categoryBoysGirls4}>
              <img
                className={styles.landingImageIcon1}
                alt=""
                src="/landingimage3@2x.png"
                onClick={onLandingImage3Click}
              />
              <div className={styles.lastChance}>
                <p className={styles.last}>LAST</p>
                <p className={styles.last}>CHANCE</p>
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
                    <div className={styles.address}>
                      San Francisco, CA 94158
                    </div>
                    <div className={styles.address}>info@my-domain.com</div>
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
                  <input
                    className={styles.inputBox}
                    type="email"
                    placeholder="Enter your email here*       "
                    required
                  />
                  <button className={styles.button}>
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
          </div>
        </footer>
        <button className={styles.buttonChat} onClick={openChattingPopup}>
          <img className={styles.icon} alt="" src="/frame.svg" />
          <div className={styles.text}>
            <div className={styles.chattingService}>채팅 서비스</div>
          </div>
        </button>
      </div>
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
    </>
  );
};

export default MainPage;
