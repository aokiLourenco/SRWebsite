import { FunctionComponent, useMemo, type CSSProperties } from "react";
import AboutButton from "./AboutButton";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
  pEWPEWLogo?: string;
  placeholder?: string;
  text?: string;
  iconTrailing?: boolean;
  iconLeading?: boolean;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propPosition?: CSSProperties["position"];
  propMargin?: CSSProperties["margin"];
  propRight?: CSSProperties["right"];
  propBottom?: CSSProperties["bottom"];
  propLeft?: CSSProperties["left"];
  propBackdropFilter?: CSSProperties["backdropFilter"];
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  propAlignSelf,
  propPosition,
  propMargin,
  propRight,
  propBottom,
  propLeft,
  propBackdropFilter,
  pEWPEWLogo,
  placeholder,
  text,
  iconTrailing,
  iconLeading,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      position: propPosition,
      margin: propMargin,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
    };
  }, [
    propAlignSelf,
    propPosition,
    propMargin,
    propRight,
    propBottom,
    propLeft,
  ]);

  const footerBGStyle: CSSProperties = useMemo(() => {
    return {
      backdropFilter: propBackdropFilter,
    };
  }, [propBackdropFilter]);

  return (
    <footer
      className={[styles.footer, className].join(" ")}
      style={footerStyle}
    >
      <div className={styles.footerBg} style={footerBGStyle} />
      <div className={styles.fotterLine} />
      <div className={styles.footerContent}>
        <div className={styles.footerItems}>
          <div className={styles.frameParent}>
            <div className={styles.socialIconsWrapper}>
              <div className={styles.socialIcons}>
                <img
                  className={styles.socialIcon}
                  loading="lazy"
                  alt=""
                  src="/social-icon.svg"
                />
                <img
                  className={styles.socialIcon}
                  alt=""
                  src="/social-icon-1.svg"
                />
                <img
                  className={styles.socialIcon}
                  alt=""
                  src="/social-icon-2.svg"
                />
                <img
                  className={styles.socialIcon}
                  alt=""
                  src="/social-icon-3.svg"
                />
                <img
                  className={styles.socialIcon}
                  alt=""
                  src="/social-icon-4.svg"
                />
                <img
                  className={styles.socialIcon5}
                  alt=""
                  src="/social-icon-5.svg"
                />
              </div>
            </div>
            <AboutButton
              iconTrailing={iconTrailing}
              iconLeading={iconLeading}
              placeholder={placeholder}
              text={text}
            />
          </div>
          <div className={styles.pewpewLogoParent}>
            <img
              className={styles.pewpewLogoIcon}
              loading="lazy"
              alt=""
              src={pEWPEWLogo}
            />
            <img
              className={styles.waacLogoIcon}
              loading="lazy"
              alt=""
              src="/waac-logo@2x.png"
            />
            <div className={styles.footerText}>
              © 2024 Sweet Ricers. Todos os direitos reservados
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
