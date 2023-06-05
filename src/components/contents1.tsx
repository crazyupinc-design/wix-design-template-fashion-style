import { FunctionComponent } from "react";
import styles from "./contents1.module.css";
const Contents1: FunctionComponent = () => {
  return (
    <div className={styles.contents1}>
      <div className={styles.ourStoryBottom}>
        <div className={styles.ourStoryBottom1}>
          <div className={styles.title}>
            <img className={styles.bgIcon} alt="" src="/bg1.svg" />
            <div className={styles.ourCollections}>Contact</div>
          </div>
          <div className={styles.content}>
            <div
              className={styles.text}
            >{`We are always happy to see & hear from you. If you want to give us feedback, ask a question or simply want to say hello, please visit us or use the contact form below.`}</div>
          </div>
          <div className={styles.content1}>
            <div className={styles.text1}>500 Terry Francine Street</div>
            <div className={styles.text1}>San Francisco, CA 94158</div>
            <div className={styles.text1}>info@my-domain.c</div>
            <a
              className={styles.text4}
              href="mailto:info@my-domain.com"
              target="_blank"
            >
              —
            </a>
            <div className={styles.text5}>1-800-000-0000</div>
          </div>
        </div>
        <div className={styles.shopImg}>
          <img className={styles.imgIcon} alt="" src="/img2@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Contents1;
