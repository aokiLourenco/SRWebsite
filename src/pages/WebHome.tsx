import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import MainBody from "../components/MainBody";
import Footer from "../components/Footer";
import styles from "./WebHome.module.css";

const WebHome: FunctionComponent = () => {
  return (
    <div className={styles.webHome}>
      <div className={styles.webHomeChild} />
      <div className={styles.webHomeItem} />
      <img className={styles.bgIcon} alt="" src="/bg.svg" />
      <main className={styles.bgParent}>
        <section className={styles.bg} />
        <FrameComponent2 />
        <section className={styles.mainBodyWrapper}>
          <MainBody />
        </section>
        <Footer
          propAlignSelf="stretch"
          propPosition="relative"
          propMargin="unset"
          propRight="unset"
          propBottom="unset"
          propLeft="unset"
          propBackdropFilter="blur(10px)"
          pEWPEWLogo="/pewpew-logo.svg"
          placeholder="/placeholder1.svg"
          text="20 jogadores online"
          iconTrailing={false}
          iconLeading
        />
      </main>
    </div>
  );
};

export default WebHome;
