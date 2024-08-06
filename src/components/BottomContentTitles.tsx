import { FunctionComponent } from "react";
import styles from "./BottomContentTitles.module.css";

export type BottomContentTitlesType = {
  className?: string;
  casualFunRounds?: string;
  oFF?: string;
};

const BottomContentTitles: FunctionComponent<BottomContentTitlesType> = ({
  className = "",
  casualFunRounds,
  oFF,
}) => {
  return (
    <div className={[styles.bottomContentTitles, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.casualFunRounds}>{casualFunRounds}</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.off}>{oFF}</div>
      </div>
    </div>
  );
};

export default BottomContentTitles;
