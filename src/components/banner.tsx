import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./banner.module.css";
const Banner: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBannerButtonClick = useCallback(() => {
    navigate("/boysgirlspage");
  }, [navigate]);

  return (
    <div className={styles.banner}>
      <div className={styles.bannerLeft}>
        <img className={styles.bgLeftIcon} alt="" src="/bgleft@2x.png" />
      </div>
      <div className={styles.bannerRight}>
        <article className={styles.banner1}>
          <div className={styles.bgRight} />
          <img className={styles.vectorIcon} alt="" src="/vector51.svg" />
          <div className={styles.bannerContent}>
            <div className={styles.aBoutiqueShopParent}>
              <div className={styles.aBoutiqueShop}>A boutique Shop</div>
              <div className={styles.forYourLittleOnes}>
                for your little ones
              </div>
              <button
                className={styles.bannerButton}
                onClick={onBannerButtonClick}
              >
                <div className={styles.shopClothesCollection}>
                  Shop Clothes Collection
                </div>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Banner;
