import { FunctionComponent } from "react";
import Header2 from "../components/Header2";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import BottomContentTitles from "../components/BottomContentTitles";
import Footer from "../components/Footer";
import styles from "./WebHome.module.css";

const WebHome: FunctionComponent = () => {
  return (
    <div className={styles.webHome}>
      <div className={styles.bg} />
      <img className={styles.bgIcon} alt="" src="/bg.svg" />
      <main className={styles.headerParent}>
        <Header2 />
        <section className={styles.content}>
          <div className={styles.contentChild} />
          <div className={styles.mainContentWrapper}>
            <div className={styles.mainContent}>
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <FrameComponent
                    v1MULTIARENAS="1V1 MULTI-ARENAS"
                    emptyPlaceholder="6/12"
                  />
                  <FrameComponent
                    v1MULTIARENAS="retake #1"
                    emptyPlaceholder="4/12"
                  />
                  <FrameComponent1 />
                  <FrameComponent
                    v1MULTIARENAS="retake #3"
                    emptyPlaceholder="0/12"
                  />
                </div>
                <div className={styles.updateContentParent}>
                  <div className={styles.updateContent}>
                    <img
                      className={styles.maskGroupIcon}
                      loading="lazy"
                      alt=""
                      src="/mask-group1@2x.png"
                    />
                    <div className={styles.updateBackground} />
                  </div>
                  <div className={styles.update716Parent}>
                    <div className={styles.update716}>UPDATE 7.16</div>
                    <b className={styles.updateServidores}>
                      Update Servidores - 16 de julho
                    </b>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.rectangleParent}>
                      <div className={styles.frameChild} />
                      <div className={styles.frameItem} />
                      <div className={styles.frameItem} />
                      <div className={styles.frameItem} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.matchesParent}>
                  <FrameComponent
                    v1MULTIARENAS="DEATH MATCH FFA MIRAGE"
                    emptyPlaceholder="0/20"
                  />
                  <FrameComponent
                    v1MULTIARENAS="DEATH MATCH FFA DUST 2"
                    emptyPlaceholder="0/12"
                  />
                  <FrameComponent
                    v1MULTIARENAS="death match ffa saw rifles"
                    emptyPlaceholder="0/47"
                  />
                  <BottomContentTitles casualFunRounds="JAILBREAK" oFF="SOON" />
                  <BottomContentTitles
                    casualFunRounds="casual fun rounds"
                    oFF="OFF"
                  />
                </div>
                <div className={styles.ellipseParent}>
                  <div className={styles.ellipseDiv} />
                  <div className={styles.frameChild1} />
                  <div className={styles.guerrillaMask}>
                    <img
                      className={styles.maskGroupIcon1}
                      alt=""
                      src="/mask-group-1@2x.png"
                    />
                    <div className={styles.guerrillaMaskChild} />
                  </div>
                  <h2 className={styles.missesGuerrillaAlphaContainer}>
                    <span className={styles.missesGuerrillaAlphaContainer1}>
                      <p className={styles.misses}>missões</p>
                      <p className={styles.guerrillaAlpha}>GUERRILLA alpha!</p>
                    </span>
                  </h2>
                  <div className={styles.aboutButton}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/placeholder.svg"
                    />
                    <div className={styles.textPadding}>
                      <b className={styles.text}>NOVAS missões</b>
                    </div>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/placeholder.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
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
    </div>
  );
};

export default WebHome;
