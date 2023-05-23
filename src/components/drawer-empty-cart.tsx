import { FunctionComponent, useEffect } from "react";
import styles from "./drawer-empty-cart.module.css";

type DrawerEmptyCartType = {
  onClose?: () => void;
};

const DrawerEmptyCart: FunctionComponent<DrawerEmptyCartType> = ({
  onClose,
}) => {
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
    <div className={styles.drawerEmptyCart} data-animate-on-scroll>
      <div className={styles.title}>
        <img
          className={styles.chevronRightIcon}
          alt=""
          src="/chevronright.svg"
        />
        <div className={styles.div}>쇼핑카트</div>
      </div>
      <div className={styles.div1}>카트가 비어있습니다.</div>
    </div>
  );
};

export default DrawerEmptyCart;
