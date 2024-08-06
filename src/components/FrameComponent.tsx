import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  v1MULTIARENAS?: string;
  emptyPlaceholder?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  v1MULTIARENAS,
  emptyPlaceholder,
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.v1MultiArenas}>{v1MULTIARENAS}</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.emptyPlaceholder}>{emptyPlaceholder}</div>
      </div>
    </div>
  );
};

export default FrameComponent;
