import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./WebHome.module.css";

const WebHome: FunctionComponent = () => {
  return (
    <div className={styles.webHome}>
      <div className={styles.webHomeChild} />
      <img className={styles.bgIcon} alt="" src="/bg.svg" />
      <footer className={styles.bgParent}>
        <section className={styles.bg} />
        <FrameComponent2 />
        <section className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <div className={styles.rectangleParent}>
            <div className={styles.frameItem} />
            <div className={styles.div}>0/47</div>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.nestedContent}>
              <div className={styles.arenaContainer}>
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
                <FrameComponent
                  v1MULTIARENAS="retake #3"
                  emptyPlaceholder="0/12"
                />
                <div className={styles.updateContainer}>
                  <div className={styles.updateContent}>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.frameInner} />
                      <div className={styles.deathMatchFfa}>
                        DEATH MATCH FFA MIRAGE
                      </div>
                    </div>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.frameInner} />
                      <div className={styles.deathMatchFfa}>
                        DEATH MATCH FFA DUST 2
                      </div>
                    </div>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.frameInner} />
                      <div className={styles.deathMatchFfa}>
                        death match ffa saw rifles
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangleParent1}>
                    <div className={styles.frameItem} />
                    <div className={styles.div}>0/20</div>
                  </div>
                </div>
              </div>
              <div className={styles.serverUpdate}>
                <div className={styles.updateMask}>
                  <img
                    className={styles.maskGroupIcon}
                    loading="lazy"
                    alt=""
                    src="/mask-group2@2x.png"
                  />
                  <div className={styles.updateBackground} />
                </div>
                <div className={styles.update716}>UPDATE 7.16</div>
                <div className={styles.updateServidores16DeJulhParent}>
                  <b className={styles.updateServidores}>
                    Update Servidores - 16 de julho
                  </b>
                  <div className={styles.frameWrapper}>
                    <div className={styles.frameDiv}>
                      <div className={styles.frameChild3} />
                      <div className={styles.frameChild4} />
                      <div className={styles.frameChild4} />
                      <div className={styles.frameChild4} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.frameItem} />
            <div className={styles.div}>0/12</div>
          </div>
        </section>
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

export default WebHome;
