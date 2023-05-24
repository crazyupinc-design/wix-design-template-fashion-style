import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Contents1 from "../components/contents1";
import Contents2 from "../components/contents2";
import Footer from "../components/footer";
import styles from "./contact-page.module.css";
const ContactPage: FunctionComponent = () => {
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
    <div className={styles.contactPage}>
      <Header
        vector="/vector8.svg"
        vector1="/vector9.svg"
        toysDecorColor="#313131"
        aboutColor="#313131"
        contactColor="#313131"
        memberSectionColor="#fc8f8d"
        onLogoClick={onLogoClick}
        onBoysGirlsClick={onBoysGirlsClick}
        onToysDecorClick={onToysDecorClick}
        onAboutClick={onAboutClick}
        onContactClick={onContactClick}
      />
      <Contents1 />
      <Contents2 />
      <Footer />
    </div>
  );
};

export default ContactPage;
