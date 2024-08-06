import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.retake2}>retake #2</b>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <img
              className={styles.link03Icon}
              loading="lazy"
              alt=""
              src="/link03.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameInner} />
        <b className={styles.b}>2/12</b>
      </div>
    </div>
  );
};

export default FrameComponent1;
