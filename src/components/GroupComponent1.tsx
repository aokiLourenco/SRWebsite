import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  className?: string;
  layer04?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propOpacity?: CSSProperties["opacity"];
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
  propWidth,
  propAlignSelf,
  propOpacity,
  propPadding,
  propPadding1,
  layer04,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
      opacity: propOpacity,
      padding: propPadding,
    };
  }, [propWidth, propAlignSelf, propOpacity, propPadding]);

  const productSliderNameOneStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className={[styles.productSliderNameOneParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div
        className={styles.productSliderNameOne}
        style={productSliderNameOneStyle}
      >
        <div className={styles.productSliderNameOneChild} />
        <img
          className={styles.layer04Icon}
          loading="lazy"
          alt=""
          src={layer04}
        />
      </div>
      <div className={styles.productSliderTitleOne}>
        <div className={styles.jerseySaw2024}>Jersey SAW 2024</div>
        <div className={styles.div}>
          <sup>
            <span className={styles.span}>65€</span>
          </sup>
          <span className={styles.span1}> 50€</span>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
