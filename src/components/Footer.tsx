import { FunctionComponent } from "react";
import AboutButton from "./AboutButton";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
  pEWPEWLogo?: string;
  placeholder?: string;
  text?: string;
  iconTrailing?: boolean;
  iconLeading?: boolean;
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  pEWPEWLogo,
  placeholder,
  text,
  iconTrailing,
  iconLeading,
}) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.footerChild} />
      <div className={styles.footerBg} />
      <div className={styles.fotterLine} />
      <div className={styles.footerItems}>
        <div className={styles.footerElements}>
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
          <div className={styles.socialIcons1}>
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
    </section>
  );
};

export default Footer;
