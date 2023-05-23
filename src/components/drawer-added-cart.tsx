import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddedProduct from "./added-product";
import styles from "./drawer-added-cart.module.css";

type DrawerAddedCartType = {
  onClose?: () => void;
};

const DrawerAddedCart: FunctionComponent<DrawerAddedCartType> = ({
  onClose,
}) => {
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

  const onButoonClick = useCallback(() => {
    navigate("/productcartpage");
  }, [navigate]);

  const onButoon1Click = useCallback(() => {
    navigate("/productcartpage");
  }, [navigate]);

  return (
    <div className={styles.drawerAddedCart} data-animate-on-scroll>
      <div className={styles.title}>
        <img
          className={styles.chevronRightIcon}
          alt=""
          src="/chevronright.svg"
        />
        <div className={styles.div}>쇼핑카트</div>
      </div>
      <button className={styles.butoon} onClick={onButoonClick}>
        <div className={styles.addCart}>카트보기</div>
      </button>
      <AddedProduct />
      <div className={styles.productNamePriceParent}>
        <div className={styles.productNamePrice}>
          <div className={styles.name}>소계</div>
          <div className={styles.price}>₩20</div>
        </div>
        <div className={styles.frameChild} />
        <button className={styles.butoon} onClick={onButoon1Click}>
          <div className={styles.addCart}>카트보기</div>
        </button>
      </div>
    </div>
  );
};

export default DrawerAddedCart;
