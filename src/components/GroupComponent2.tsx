import { FunctionComponent } from "react";
import styles from "./GroupComponent2.module.css";

export type GroupComponent2Type = {
  className?: string;
  layer05?: string;
};

const GroupComponent2: FunctionComponent<GroupComponent2Type> = ({
  className = "",
  layer05,
}) => {
  return (
    <div className={[styles.productImageParent, className].join(" ")}>
      <div className={styles.productImage}>
        <div className={styles.productImageChild} />
        <img className={styles.layer05Icon} alt="" src={layer05} />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.jerseySaw2024}>Jersey SAW 2024</div>
        <div className={styles.div}>
          <span>
            <sup>
              <span className={styles.span}>65€</span>
            </sup>
            <span className={styles.span1}> 50€</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent2;
