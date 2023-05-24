import { FunctionComponent, useEffect } from "react";
import styles from "./phone-menu-page.module.css";

type PhoneMenuPageType = {
  onClose?: () => void;
};

const PhoneMenuPage: FunctionComponent<PhoneMenuPageType> = ({ onClose }) => {
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

  return (
    <div className={styles.phoneMenuPage} data-animate-on-scroll>
      <div className={styles.frameParent}>
        <div className={styles.logInParent}>
          <div className={styles.logIn}>
            <img className={styles.icon} alt="" src="/icon.svg" />
            <div className={styles.div}>로그인</div>
          </div>
          <img className={styles.xSquareIcon} alt="" src="/xsquare.svg" />
        </div>
        <div className={styles.aboutParent}>
          <div className={styles.div}>About</div>
          <div className={styles.div}>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMenuPage;
