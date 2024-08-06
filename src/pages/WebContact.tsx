import { FunctionComponent } from "react";
import MainContent from "../components/MainContent";
import ContentBottom from "../components/ContentBottom";
import Footer1 from "../components/Footer1";
import styles from "./WebContact.module.css";

const WebContact: FunctionComponent = () => {
  return (
    <div className={styles.webContact}>
      <div className={styles.webContactChild} />
      <img className={styles.bgIcon} alt="" src="/bg.svg" />
      <footer className={styles.bgParent}>
        <section className={styles.bg} />
        <MainContent />
        <ContentBottom />
        <Footer1 />
      </footer>
    </div>
  );
};

export default WebContact;
