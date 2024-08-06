import { FunctionComponent } from "react";
import AboutButton from "./AboutButton";
import styles from "./Header3.module.css";

export type Header3Type = {
  className?: string;
};

const Header3: FunctionComponent<Header3Type> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.headerBg} />
      <div className={styles.headerContent}>
        <div className={styles.headerNavigation}>
          <div className={styles.logoParent}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/logo.svg"
            />
            <nav className={styles.contactButtonParent}>
              <div className={styles.contactButton}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
                <div className={styles.textPadding}>
                  <a className={styles.text}>INCÍCIO</a>
                </div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
              </div>
              <div className={styles.contactButton1}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
                <div className={styles.textPadding}>
                  <a className={styles.text1}>servidores</a>
                </div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
              </div>
              <div className={styles.contactButton}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
                <div className={styles.textPadding}>
                  <a className={styles.text2}>missões</a>
                </div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
              </div>
              <div className={styles.contactButton1}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
                <div className={styles.textPadding}>
                  <a className={styles.text3}>Contactos</a>
                </div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
              </div>
            </nav>
            <div className={styles.aboutButtonParent}>
              <div className={styles.aboutButton}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder1.svg"
                />
                <div className={styles.textPadding}>
                  <a className={styles.text4}>sKIN CHANGER</a>
                </div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
              </div>
              <div className={styles.contactButton4}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
                <div className={styles.textPadding}>
                  <a className={styles.text5}>VIP</a>
                </div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
              </div>
              <AboutButton
                iconTrailing={false}
                iconLeading
                propBackground="linear-gradient(90deg, rgba(83, 73, 226, 0), #5349e2)"
                propBorder="2px solid #5349e2"
                propWidth="101px"
                propBoxShadow="0px 0px 20px #5349e2"
                placeholder="/tag1.svg"
                text="LOJA"
                propFontWeight="700"
                propTextDecoration="none"
                propDisplay="inline-block"
                propMinWidth="39px"
              />
            </div>
          </div>
          <AboutButton
            iconTrailing={false}
            iconLeading
            propBackground="linear-gradient(90deg, rgba(83, 73, 226, 0), rgba(83, 73, 226, 0.5))"
            propBorder="1px solid #5349e2"
            propWidth="unset"
            propBoxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
            placeholder="/stop-circle.svg"
            text="LOGIN VIA steam"
            propFontWeight="600"
            propTextDecoration="none"
            propDisplay="unset"
            propMinWidth="unset"
          />
        </div>
      </div>
      <div className={styles.headerLine} />
    </header>
  );
};

export default Header3;
