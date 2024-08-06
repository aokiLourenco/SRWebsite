import { FunctionComponent } from "react";
import AboutButton from "./AboutButton";
import styles from "./Footer1.module.css";

export type Footer1Type = {
  className?: string;
};

const Footer1: FunctionComponent<Footer1Type> = ({ className = "" }) => {
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
              iconTrailing
              iconLeading
              placeholder="/placeholder1.svg"
              text="20 jogadores online"
            />
          </div>
          <div className={styles.socialIcons1}>
            <img
              className={styles.pewpewLogoIcon}
              loading="lazy"
              alt=""
              src="/pewpew-logo.svg"
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

export default Footer1;
