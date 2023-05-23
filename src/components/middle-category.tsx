import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./middle-category.module.css";
const MiddleCategory: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLandingImage1Click = useCallback(() => {
    navigate("/toysdecorpage");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/aboutpage");
  }, [navigate]);

  const onLandingImage2Click = useCallback(() => {
    navigate("/boysgirlspage");
  }, [navigate]);

  return (
    <div className={styles.middleCategory}>
      <div className={styles.categoryToys4Parent}>
        <div className={styles.categoryToys4}>
          <img
            className={styles.landingImageIcon}
            alt=""
            src="/landingimage1@2x.png"
            onClick={onLandingImage1Click}
          />
        </div>
        <div className={styles.categoryOurStory}>
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon} alt="" src="/vector15.svg" />
            <div className={styles.title}>
              <div className={styles.getTo}>Get To</div>
              <div className={styles.knowUs}>Know Us</div>
            </div>
            <button className={styles.button} onClick={onButton2Click}>
              <div className={styles.ourStory}>Our Story</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.categoryBoysGirls2}>
        <img className={styles.vectorIcon1} alt="" src="/vector16.svg" />
        <img
          className={styles.landingImageIcon1}
          alt=""
          src="/landingimage2@2x.png"
          onClick={onLandingImage2Click}
        />
      </div>
    </div>
  );
};

export default MiddleCategory;
