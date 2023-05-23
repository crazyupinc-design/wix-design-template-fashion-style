import { FunctionComponent, useState, useCallback } from "react";
import ChattingPopup from "../components/chatting-popup";
import PortalPopup from "../components/portal-popup";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Banner from "../components/banner";
import CategorySale from "../components/category-sale";
import CategoryToys1 from "../components/category-toys1";
import MiddleCategory from "../components/middle-category";
import Footer from "../components/footer";
import styles from "./main-page.module.css";
const MainPage: FunctionComponent = () => {
  const [isChattingPopupOpen, setChattingPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openChattingPopup = useCallback(() => {
    setChattingPopupOpen(true);
  }, []);

  const closeChattingPopup = useCallback(() => {
    setChattingPopupOpen(false);
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

  return (
    <>
      <div className={styles.mainPage}>
        <img className={styles.bgImageIcon} alt="" src="/bgimage@2x.png" />
        <Header
          vector="/vector8.svg"
          logoBackground="/logobackground1@2x.png"
          vector1="/vector10.svg"
          cartZIndex="1"
          memberSectionColor="#313131"
          onLogoClick={onLogoClick}
          onBoysGirlsClick={onBoysGirlsClick}
          onToysDecorClick={onToysDecorClick}
          onAboutClick={onAboutClick}
          onContactClick={onContactClick}
        />
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
        <Footer
          insta="/insta@2x.png"
          faceBook="/facebook@2x.png"
          pinter="/pinter@2x.png"
          propZIndex="7"
        />
        <button className={styles.buttonChat} onClick={openChattingPopup}>
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
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
    </>
  );
};

export default MainPage;
