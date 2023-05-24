import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./about-page.module.css";
const AboutPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBoysGirlsClick = useCallback(() => {
    navigate("/boysgirlspage");
  }, [navigate]);

  const onToysDecorClick = useCallback(() => {
    navigate("/toysdecorpage");
  }, [navigate]);

  const onAboutClick = useCallback(() => {
    navigate("/aboutpage");
  }, [navigate]);

  const onContactClick = useCallback(() => {
    navigate("/aboutpage1");
  }, [navigate]);

  return (
    <div className={styles.aboutPage}>
      <Header
        vector="/vector8.svg"
        vector1="/vector9.svg"
        contactColor="#fc8f8d"
        memberSectionColor="#313131"
        onLogoClick={onLogoClick}
        onBoysGirlsClick={onBoysGirlsClick}
        onToysDecorClick={onToysDecorClick}
        onAboutClick={onAboutClick}
        onContactClick={onContactClick}
      />
      <div className={styles.ourStory}>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        <img className={styles.imageIcon1} alt="" src="/image1@2x.png" />
        <img className={styles.imageIcon2} alt="" src="/image2@2x.png" />
        <img className={styles.imageIcon3} alt="" src="/image3@2x.png" />
        <div className={styles.ourStoryBottom}>
          <div className={styles.ourStoryBottom1}>
            <div className={styles.title}>
              <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
              <div className={styles.ourCollections}>Our Story</div>
            </div>
            <div className={styles.content}>
              <div className={styles.text}>
                <p
                  className={styles.thisIsA}
                >{`This is a great space to write long text about your company and `}</p>
                <p className={styles.thisIsA}>
                  your services. You can use this space to go into a little more
                  detail
                </p>
                <p className={styles.thisIsA}>
                  about your company. Talk about your team and what services you
                </p>
                <p className={styles.thisIsA}>
                  provide. Tell your visitors the story of how you came up with
                  the
                </p>
                <p className={styles.thisIsA}>
                  idea for your business and what makes you different from your
                </p>
                <p className={styles.thisIsA}>
                  competitors. Make your company stand out and show your
                  visitors
                </p>
                <p className={styles.thisIsA}>
                  who you are. I'm a paragraph. Click here to add your own text
                  and edit me. It’s
                </p>
                <p className={styles.thisIsA}>
                  easy. Just click “Edit Text” or double click me to add your
                  own
                </p>
                <p className={styles.thisIsA}>
                  content and make changes to the font. Feel free to drag and
                  drop
                </p>
                <p className={styles.thisIsA}>
                  me anywhere you like on your page. I’m a great place for you
                  to tell
                </p>
                <p className={styles.thisIsA}>
                  a story and let your users know a little more about you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ourStoryBottom2}>
          <div className={styles.ourStoryBottom1}>
            <div className={styles.title}>
              <img className={styles.vectorIcon1} alt="" src="/vector6.svg" />
              <div className={styles.ourCollections1}>
                <p className={styles.thisIsA}>
                  Our collections are all made with love
                </p>
                <p className={styles.thisIsA}>by independent designers</p>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.text1}>
                <p className={styles.thisIsA}>
                  I'm a paragraph. Click here to add your own text and edit me.
                  I’m a
                </p>
                <p className={styles.thisIsA}>
                  great place for you to tell a story and let your users know a
                  little
                </p>
                <p className={styles.thisIsA}>more about you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer propZIndex="unset" />
    </div>
  );
};

export default AboutPage;
