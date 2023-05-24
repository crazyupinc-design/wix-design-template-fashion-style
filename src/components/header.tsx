import { FunctionComponent, useState, useMemo, useCallback } from "react";
import CSS, { Property } from "csstype";
import DrawerEmptyCart from "./drawer-empty-cart";
import PortalDrawer from "./portal-drawer";
import styles from "./header.module.css";

type HeaderType = {
  vector?: string;
  vector1?: string;

  /** Style props */
  cartZIndex?: Property.ZIndex;
  toysDecorColor?: Property.Color;
  aboutColor?: Property.Color;
  contactColor?: Property.Color;
  memberSectionColor?: Property.Color;

  /** Action props */
  onLogoClick?: () => void;
  onBoysGirlsClick?: () => void;
  onToysDecorClick?: () => void;
  onAboutClick?: () => void;
  onContactClick?: () => void;
};

const Header: FunctionComponent<HeaderType> = ({
  vector,
  vector1,
  cartZIndex,
  toysDecorColor,
  aboutColor,
  contactColor,
  memberSectionColor,
  onLogoClick,
  onBoysGirlsClick,
  onToysDecorClick,
  onAboutClick,
  onContactClick,
}) => {
  const headerNavigationStyle: CSS.Properties = useMemo(() => {
    return {
      zIndex: cartZIndex,
    };
  }, [cartZIndex]);

  const boysGirlsStyle: CSS.Properties = useMemo(() => {
    return {
      color: toysDecorColor,
    };
  }, [toysDecorColor]);

  const toysDecorStyle: CSS.Properties = useMemo(() => {
    return {
      color: aboutColor,
    };
  }, [aboutColor]);

  const aboutStyle: CSS.Properties = useMemo(() => {
    return {
      color: contactColor,
    };
  }, [contactColor]);

  const contactStyle: CSS.Properties = useMemo(() => {
    return {
      color: memberSectionColor,
    };
  }, [memberSectionColor]);

  const [isDrawerEmptyCartOpen, setDrawerEmptyCartOpen] = useState(false);

  const openDrawerEmptyCart = useCallback(() => {
    setDrawerEmptyCartOpen(true);
  }, []);

  const closeDrawerEmptyCart = useCallback(() => {
    setDrawerEmptyCartOpen(false);
  }, []);

  return (
    <>
      <header className={styles.headerNavigation} style={headerNavigationStyle}>
        <a className={styles.cart}>
          <div className={styles.icon}>
            <img className={styles.vectorIcon} alt="" src={vector} />
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
            <div className={styles.div}>0</div>
          </div>
        </a>
        <div className={styles.logo} id="logo" onClick={onLogoClick}>
          <img
            className={styles.logoBackgroundIcon}
            alt=""
            src="/logobackground1@2x.png"
          />
          <div className={styles.just4Kids}>Just 4 Kids</div>
        </div>
        <div className={styles.navigationMenu}>
          <a className={styles.navigationLink}>
            <div
              className={styles.boysGirls}
              onClick={onBoysGirlsClick}
              style={boysGirlsStyle}
            >{`Boys & Girls`}</div>
            <div
              className={styles.toysDecor}
              onClick={onToysDecorClick}
              style={toysDecorStyle}
            >{`Toys & Decor`}</div>
            <div
              className={styles.about}
              onClick={onAboutClick}
              style={aboutStyle}
            >
              About
            </div>
            <div
              className={styles.contact}
              onClick={onContactClick}
              style={contactStyle}
            >
              Contact
            </div>
          </a>
          <article className={styles.memberSection}>
            <div className={styles.logIn}>
              <img className={styles.icon1} alt="" src="/icon.svg" />
              <div className={styles.div1}>로그인</div>
            </div>
            <button className={styles.cart1} onClick={openDrawerEmptyCart}>
              <div className={styles.icon2}>
                <img className={styles.vectorIcon} alt="" src={vector1} />
                <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
                <div className={styles.div2}>0</div>
              </div>
            </button>
          </article>
        </div>
        <button className={styles.hambugerMenu}>
          <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
          <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
          <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
        </button>
      </header>
      {isDrawerEmptyCartOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeDrawerEmptyCart}
        >
          <DrawerEmptyCart onClose={closeDrawerEmptyCart} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Header;
