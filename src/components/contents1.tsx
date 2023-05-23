import { FunctionComponent } from "react";
import styles from "./contents1.module.css";
const Contents1: FunctionComponent = () => {
  return (
    <div className={styles.contents1}>
      <div className={styles.contactSection}>
        <div className={styles.contact}>
          <div className={styles.col}>
            <img className={styles.bgIcon} alt="" src="/bg.svg" />
            <div className={styles.title}>Contact</div>
          </div>
          <div className={styles.contents}>
            <div className={styles.weAreAlways}>
              <p
                className={styles.giveUsFeedback}
              >{`We are always happy to see & hear from you. If you want to`}</p>
              <p className={styles.giveUsFeedback}>
                give us feedback, ask a question or simply want to say hello,
              </p>
              <p className={styles.giveUsFeedback}>
                please visit us or use the contact form below.
              </p>
            </div>
            <div className={styles.col1}>
              <div className={styles.col2}>
                <div className={styles.street}>500 Terry Francine Street</div>
                <div className={styles.address}>San Francisco, CA 94158</div>
                <div className={styles.email}>info@my-domain.com</div>
              </div>
              <div className={styles.div}>—</div>
              <div className={styles.phoneNumber}>1-800-000-0000</div>
            </div>
          </div>
        </div>
        <div className={styles.shopImg}>
          <img className={styles.imgIcon} alt="" src="/img1@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Contents1;
