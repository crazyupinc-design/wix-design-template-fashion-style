import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./footer.module.css";

type FooterType = {
  insta?: string;
  faceBook?: string;
  pinter?: string;

  /** Style props */
  propZIndex?: Property.ZIndex;
};

const Footer: FunctionComponent<FooterType> = ({
  insta,
  faceBook,
  pinter,
  propZIndex,
}) => {
  const footerStyle: CSS.Properties = useMemo(() => {
    return {
      zIndex: propZIndex,
    };
  }, [propZIndex]);

  return (
    <footer className={styles.footer} style={footerStyle}>
      <div className={styles.footerLinksParent}>
        <div className={styles.footerLinks}>
          <div className={styles.col1}>
            <div className={styles.col11}>
              <div className={styles.contactUs}>Contact Us</div>
              <div className={styles.listItems}>
                <div className={styles.addressStreet}>
                  500 Terry Francine Street
                </div>
                <div className={styles.address}>San Francisco, CA 94158</div>
                <div className={styles.address}>info@my-domain.com</div>
                <div className={styles.tel}>Tel: 123-456-7890</div>
              </div>
            </div>
            <div className={styles.col2}>
              <div className={styles.storeHours}>Store Hours</div>
              <div className={styles.listTime}>
                <div className={styles.monFri}>Mon - Fri: 7am - 10pm</div>
                <div className={styles.saturday}>Saturday: 8am - 10pm</div>
                <div className={styles.saturday}>Sunday: 8am - 11pm</div>
              </div>
            </div>
          </div>
          <div className={styles.col21}>
            <div className={styles.col3}>
              <div className={styles.help}>Help</div>
              <div className={styles.listContact}>
                <div
                  className={styles.termsconditions}
                >{`Terms & Conditions`}</div>
                <div
                  className={styles.termsconditions}
                >{`Shipping & Returns`}</div>
                <div className={styles.termsconditions}>Payment Method</div>
                <div className={styles.termsconditions}>FAQ</div>
              </div>
            </div>
            <div className={styles.div}>
              <div className={styles.joinOurMailing}>Join Our Mailing List</div>
              <input
                className={styles.inputBox}
                type="text"
                placeholder="Enter your email here*       "
                required
              />
              <button className={styles.button}>
                <div className={styles.subscribeNow}>Subscribe Now</div>
                <div className={styles.thanksForSubmitting}>
                  Thanks for submitting!
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.snsParent}>
          <div className={styles.sns}>
            <img className={styles.instaIcon} alt="" src={insta} />
            <img className={styles.instaIcon} alt="" src={faceBook} />
            <img className={styles.instaIcon} alt="" src={pinter} />
          </div>
          <div className={styles.licenseMark}>
            <div className={styles.license}>
              © 2035 by Just 4 Kids. Powered and secured by Wix
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
