import { FunctionComponent } from "react";
import AboutButton from "./AboutButton";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.headerBg} />
      <div className={styles.headerContent}>
        <div className={styles.headerButtons}>
          <div className={styles.logoParent}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/logo.svg"
            />
            <div className={styles.contact}>
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
              <div className={styles.contactButtonParent}>
                <div className={styles.contactButton3}>
                  <img
                    className={styles.placeholderIcon}
                    alt=""
                    src="/placeholder.svg"
                  />
                  <div className={styles.textPadding3}>
                    <div className={styles.text3}>Contactos</div>
                  </div>
                  <img
                    className={styles.placeholderIcon}
                    alt=""
                    src="/placeholder.svg"
                  />
                </div>
                <div className={styles.aboutButton}>
                  <img
                    className={styles.placeholderIcon}
                    alt=""
                    src="/placeholder.svg"
                  />
                  <div className={styles.textPadding}>
                    <a className={styles.text4}>CONTACTOS</a>
                  </div>
                  <img
                    className={styles.placeholderIcon}
                    alt=""
                    src="/placeholder.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.buttonsBottom}>
              <div className={styles.aboutButton1}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder1.svg"
                />
                <div className={styles.textPadding}>
                  <a className={styles.text5}>sKIN CHANGER</a>
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
                  <a className={styles.text6}>VIP</a>
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
                propBackground="unset"
                propBorder="1px solid #5349e2"
                propWidth="100px"
                propBoxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
                placeholder="/tag.svg"
                text="Loja"
                propFontWeight="500"
                propTextDecoration="none"
                propDisplay="inline-block"
                propMinWidth="38px"
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

export default Header;
