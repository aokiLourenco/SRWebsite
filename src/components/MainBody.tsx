import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./MainBody.module.css";

export type MainBodyType = {
  className?: string;
};

const MainBody: FunctionComponent<MainBodyType> = ({ className = "" }) => {
  return (
    <div className={[styles.mainBody, className].join(" ")}>
      <div className={styles.frameParent}>
        <FrameComponent
          v1MULTIARENAS="1V1 MULTI-ARENAS"
          emptyPlaceholder="6/12"
        />
        <FrameComponent v1MULTIARENAS="retake #1" emptyPlaceholder="4/12" />
        <FrameComponent v1MULTIARENAS="retake #2" emptyPlaceholder="0/12" />
        <FrameComponent v1MULTIARENAS="retake #3" emptyPlaceholder="0/12" />
        <div className={styles.frameGroup}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.div}>0/47</div>
          </div>
          <div className={styles.matchList}>
            <div className={styles.matchTypes}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.deathMatchFfa}>
                  DEATH MATCH FFA MIRAGE
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.deathMatchFfa}>
                  DEATH MATCH FFA DUST 2
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.deathMatchFfa}>
                  death match ffa saw rifles
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild} />
              <div className={styles.div}>0/20</div>
            </div>
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.frameChild} />
            <div className={styles.div}>0/12</div>
          </div>
        </div>
      </div>
      <div className={styles.update}>
        <div className={styles.updateChild} />
        <div className={styles.updateContent}>
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
          <div className={styles.progressBar}>
            <div className={styles.progress}>
              <div className={styles.progressChild} />
              <div className={styles.progressItem} />
              <div className={styles.progressItem} />
              <div className={styles.progressItem} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
