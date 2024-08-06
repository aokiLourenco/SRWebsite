import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AboutButton.module.css";

export type AboutButtonType = {
  className?: string;
  iconTrailing?: boolean;
  iconLeading?: boolean;
  placeholder?: string;
  text?: string;

  /** Style props */
  propBackground?: CSSProperties["background"];
  propBorder?: CSSProperties["border"];
  propWidth?: CSSProperties["width"];
  propFontWeight?: CSSProperties["fontWeight"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const AboutButton: FunctionComponent<AboutButtonType> = ({
  className = "",
  iconTrailing = false,
  iconLeading = true,
  propBackground,
  propBorder,
  propWidth,
  placeholder,
  text,
  propFontWeight,
  propTextDecoration,
  propDisplay,
  propMinWidth,
}) => {
  const aboutButtonStyle: CSSProperties = useMemo(() => {
    return {
      background: propBackground,
      border: propBorder,
      width: propWidth,
    };
  }, [propBackground, propBorder, propWidth]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: propFontWeight,
      textDecoration: propTextDecoration,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propFontWeight, propTextDecoration, propDisplay, propMinWidth]);

  return (
    <div
      className={[styles.aboutButton, className].join(" ")}
      style={aboutButtonStyle}
    >
      <div className={styles.footerPlaceholder}>
        {iconLeading && (
          <img
            className={styles.placeholderIcon}
            loading="lazy"
            alt=""
            src={placeholder}
          />
        )}
      </div>
      <div className={styles.textPadding}>
        <div className={styles.text} style={textStyle}>
          {text}
        </div>
      </div>
      {iconTrailing && (
        <img
          className={styles.placeholderIcon1}
          alt=""
          src="/placeholder.svg"
        />
      )}
    </div>
  );
};

export default AboutButton;
