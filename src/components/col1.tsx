import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./col1.module.css";
const Col1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBoysGirls1Click = useCallback(() => {
    navigate("/boysgirlspage");
  }, [navigate]);

  return (
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
      <img className={styles.imgIcon} alt="" src="/img@2x.png" />
      <div className={styles.colorSelect}>
        <div className={styles.color2}>
          <img className={styles.redIcon} alt="" src="/red@2x.png" />
        </div>
        <div className={styles.color2}>
          <img className={styles.redIcon} alt="" src="/green@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Col1;
