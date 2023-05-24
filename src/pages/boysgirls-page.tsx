import { FunctionComponent, useState, useCallback } from "react";
import DrawerEmptyCart from "../components/drawer-empty-cart";
import PortalDrawer from "../components/portal-drawer";
import { useNavigate } from "react-router-dom";
import PhoneMenuPage from "../components/phone-menu-page";
import ProductListRow12 from "../components/product-list-row12";
import styles from "./boysgirls-page.module.css";
const BoysgirlsPage: FunctionComponent = () => {
  const [isDrawerEmptyCartOpen, setDrawerEmptyCartOpen] = useState(false);
  const navigate = useNavigate();
  const [isDrawerEmptyCart1Open, setDrawerEmptyCart1Open] = useState(false);
  const [isPhoneMenuPageOpen, setPhoneMenuPageOpen] = useState(false);

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
      <div className={styles.boysgirlsPage}>
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
                <div className={styles.name}>로그인</div>
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
        <div className={styles.titleSection}>
          <div className={styles.title}>
            <img className={styles.bgIcon} alt="" src="/bg3.svg" />
            <div className={styles.boysgirls}>{`Boys & Girls`}</div>
          </div>
        </div>
        <div className={styles.productSection}>
          <ProductListRow12 />
          <div className={styles.productListRow1}>
            <div className={styles.product4}>
              <img
                className={styles.productIcon}
                alt=""
                src="/product1@2x.png"
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
              <img
                className={styles.productIcon}
                alt=""
                src="/product2@2x.png"
              />
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
              <img
                className={styles.productIcon}
                alt=""
                src="/product3@2x.png"
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
              <img
                className={styles.productIcon}
                alt=""
                src="/product4@2x.png"
              />
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
        <footer className={styles.footer}>
          <div className={styles.footerLinksParent}>
            <div className={styles.footerLinks}>
              <div className={styles.col1}>
                <div className={styles.col11}>
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
      </div>
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

export default BoysgirlsPage;
