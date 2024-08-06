import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
  heartHand?: string;
  sUPORTE?: string;
  supportsweetricerspt?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  heartHand,
  sUPORTE,
  supportsweetricerspt,
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <img
        className={styles.heartHandIcon}
        loading="lazy"
        alt=""
        src={heartHand}
      />
      <div className={styles.suporteParent}>
        <h1 className={styles.suporte}>{sUPORTE}</h1>
        <div className={styles.supportIcon}>
          <h3 className={styles.supportsweetricerspt}>
            {supportsweetricerspt}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
