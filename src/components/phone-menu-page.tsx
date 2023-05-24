import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./phone-menu-page.module.css";

type PhoneMenuPageType = {
  onClose?: () => void;
};

const PhoneMenuPage: FunctionComponent<PhoneMenuPageType> = ({ onClose }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onAboutClick = useCallback(() => {
    navigate("/aboutpage");
  }, [navigate]);

  const onContactClick = useCallback(() => {
    navigate("/aboutpage1");
  }, [navigate]);

  return (
    <div className={styles.phoneMenuPage} data-animate-on-scroll>
      <div className={styles.frameParent}>
        <div className={styles.logInParent}>
          <div className={styles.logIn}>
            <img className={styles.icon} alt="" src="/icon.svg" />
            <div className={styles.div}>로그인</div>
          </div>
          <button className={styles.xSquare}>
            <img className={styles.vectorIcon} alt="" />
            <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
          </button>
        </div>
        <div className={styles.aboutParent}>
          <button className={styles.about} onClick={onAboutClick}>
            About
          </button>
          <button className={styles.about} onClick={onContactClick}>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneMenuPage;
