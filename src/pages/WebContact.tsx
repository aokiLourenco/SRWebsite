import { FunctionComponent } from "react";
import MainContent from "../components/MainContent";
import ContentBottom from "../components/ContentBottom";
import Footer from "../components/Footer";
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
        <Footer
          pEWPEWLogo="/pewpew-logo.svg"
          placeholder="/placeholder1.svg"
          text="20 jogadores online"
          iconTrailing={false}
          iconLeading
        />
      </footer>
    </div>
  );
};

export default WebContact;
