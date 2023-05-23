import { FunctionComponent } from "react";
import styles from "./contents2.module.css";
const Contents2: FunctionComponent = () => {
  return (
    <div className={styles.contents2}>
      <div className={styles.col}>
        <div className={styles.form}>
          <form className={styles.container}>
            <input
              className={styles.inputBox}
              type="email"
              placeholder="Name"
              autoFocus
            />
            <input
              className={styles.inputBox}
              type="text"
              placeholder="Email"
            />
            <input
              className={styles.inputBox}
              type="text"
              placeholder="Phone"
            />
            <input
              className={styles.textarea}
              type="text"
              placeholder="Type your message here..."
              maxLength={303}
            />
          </form>
          <button className={styles.button}>
            <div className={styles.submit}>Submit</div>
          </button>
        </div>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6307.384396494193!2d-122.3958295289374!3d37.7738148679374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7fd3dea2ac4d%3A0xd17afe2e27900b23!2z66-46rWtIDk0MTU4IOy6mOumrO2PrOuLiOyVhCDsg4ztlITrnoDsi5zsiqTsvZQ!5e0!3m2!1sko!2skr!4v1684841795811!5m2!1sko!2skr"
        />
      </div>
    </div>
  );
};

export default Contents2;
