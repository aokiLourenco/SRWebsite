import { FunctionComponent } from "react";
import Header1 from "../components/Header1";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import BottomContentTitles from "../components/BottomContentTitles";
import Footer from "../components/Footer";
import styles from "./WebServers.module.css";

const WebServers: FunctionComponent = () => {
  return (
    <div className={styles.webServers}>
      <div className={styles.bg} />
      <div className={styles.webServersChild} />
      <img className={styles.bgIcon} alt="" src="/bg.svg" />
      <main className={styles.headerParent}>
        <Header1 />
        <section className={styles.content}>
          <div className={styles.contentChild} />
          <div className={styles.mainContentWrapper}>
            <div className={styles.mainContent}>
              <FrameComponent
                v1MULTIARENAS="1V1 MULTI-ARENAS"
                emptyPlaceholder="6/12"
              />
              <FrameComponent
                v1MULTIARENAS="retake #1"
                emptyPlaceholder="4/12"
              />
              <FrameComponent1 />
              <div className={styles.sideContent}>
                <div className={styles.sideContentInner}>
                  <div className={styles.frameParent}>
                    <div className={styles.rectangleParent}>
                      <div className={styles.frameChild} />
                      <div className={styles.retake3}>retake #3</div>
                    </div>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.frameItem} />
                      <div className={styles.div}>0/12</div>
                    </div>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.frameInner} />
                      <div className={styles.jailbreak}>JAILBREAK</div>
                    </div>
                    <div className={styles.groupDiv}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.soon}>SOON</div>
                    </div>
                    <div className={styles.ellipseParent}>
                      <div className={styles.ellipseDiv} />
                      <div className={styles.frameChild1} />
                    </div>
                    <img
                      className={styles.awpAtheris01Icon}
                      loading="lazy"
                      alt=""
                      src="/awpatheris0-1@2x.png"
                    />
                    <h2 className={styles.jogaComAs}>
                      JOGA COM AS TUAS SKINS FAVORITAS!
                    </h2>
                    <div className={styles.aboutButton}>
                      <img
                        className={styles.placeholderIcon}
                        alt=""
                        src="/placeholder.svg"
                      />
                      <div className={styles.textPadding}>
                        <b className={styles.text}>MUDA aqui!</b>
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
          </div>
          <div className={styles.bottomContent}>
            <div className={styles.frameGroup}>
              <div className={styles.bottomContentImageParent}>
                <div className={styles.bottomContentImage}>
                  <img
                    className={styles.maskGroupIcon}
                    loading="lazy"
                    alt=""
                    src="/mask-group@2x.png"
                  />
                  <div className={styles.bottomContentImageChild} />
                </div>
                <h2 className={styles.servidorRetake}>{`SERVIDOR retake `}</h2>
                <div className={styles.bottomContentImageCaption}>
                  <b
                    className={styles.retakeClutch}
                  >{`Retake & Clutch mas não falhes o defuse!`}</b>
                  <div className={styles.bottomContentImageCaptionInner}>
                    <div className={styles.frameDiv}>
                      <div className={styles.frameChild2} />
                      <div className={styles.frameChild3} />
                      <div className={styles.frameChild2} />
                      <div className={styles.frameChild2} />
                    </div>
                  </div>
                </div>
              </div>
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
              <BottomContentTitles
                casualFunRounds="casual fun rounds"
                oFF="OFF"
              />
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

export default WebServers;
