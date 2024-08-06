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
        <div className={styles.headerNavigation}>
          <div className={styles.logoParent}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/logo1.svg"
            />
            <nav className={styles.contactButtonParent}>
              <div className={styles.contactButton}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
                <div className={styles.textPadding}>
                  <a className={styles.text} href="/">INCÍCIO</a>
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
                  <a className={styles.text1} href="/web-servers">servidores</a>
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
                  <a className={styles.text2} href="/web-contact">Contactos</a>
                </div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder.svg"
                />
              </div>
            </nav>
          </div>
          <div className={styles.aboutButtonParent}>
            <div className={styles.aboutButton}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder1.svg"
              />
              <div className={styles.textPadding}>
                <a className={styles.text3}>sKIN CHANGER</a>
              </div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder.svg"
              />
            </div>
            <div className={styles.contactButton3}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder.svg"
              />
              <div className={styles.textPadding}>
                <a className={styles.text4}>VIP</a>
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
              placeholder="/tag.svg"
              text="Loja"
              propFontWeight="500"
              propTextDecoration="none"
              propDisplay="inline-block"
              propMinWidth="38px"
            />
          </div>
          <AboutButton
            iconTrailing={false}
            iconLeading
            propBackground="linear-gradient(90deg, rgba(83, 73, 226, 0), rgba(83, 73, 226, 0.5))"
            propBorder="1px solid #5349e2"
            propWidth="unset"
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
