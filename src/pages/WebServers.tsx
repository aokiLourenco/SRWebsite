import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer1 from "../components/Footer1";
import styles from "./WebServers.module.css";

const WebServers: FunctionComponent = () => {
  return (
    <div className={styles.webServers}>
      <div className={styles.webServersChild} />
      <img className={styles.bgIcon} alt="" src="/bg.svg" />
      <main className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <section className={styles.bgParent}>
          <div className={styles.bg} />
          <FrameComponent1 />
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              <div className={styles.mainContent}>
                <FrameComponent
                  v1MULTIARENAS="1V1 MULTI-ARENAS"
                  emptyPlaceholder="6/12"
                />
                <FrameComponent
                  v1MULTIARENAS="retake #1"
                  emptyPlaceholder="4/12"
                />
                <FrameComponent
                  v1MULTIARENAS="retake #2"
                  emptyPlaceholder="0/12"
                />
                <div className={styles.mainContentInner}>
                  <div className={styles.frameParent}>
                    <div className={styles.frameWrapper}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.frameInner} />
                        <div className={styles.div}>0/12</div>
                      </div>
                    </div>
                    <div className={styles.frameGroup}>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.rectangleDiv} />
                        <div className={styles.retake3}>retake #3</div>
                      </div>
                      <div className={styles.frameChild1} />
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
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.maskGroupParent}>
                    <img
                      className={styles.maskGroupIcon}
                      loading="lazy"
                      alt=""
                      src="/mask-group@2x.png"
                    />
                    <div className={styles.frameChild2} />
                  </div>
                  <h2
                    className={styles.servidorRetake}
                  >{`SERVIDOR retake `}</h2>
                  <div className={styles.bottomContentTitles}>
                    <b
                      className={styles.retakeClutch}
                    >{`Retake & Clutch mas não falhes o defuse!`}</b>
                    <div className={styles.sideContent}>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.frameChild3} />
                        <div className={styles.frameChild4} />
                        <div className={styles.frameChild3} />
                        <div className={styles.frameChild3} />
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
              </div>
            </div>
          </div>
          <Footer1
            pEWPEWLogo="/pewpew-logo.svg"
            placeholder="/placeholder1.svg"
            text="20 jogadores online"
            iconTrailing={false}
            iconLeading
          />
        </section>
      </main>
    </div>
  );
};

export default WebServers;
