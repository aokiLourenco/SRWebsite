import { FunctionComponent } from "react";
import AboutButton from "./AboutButton";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.headerWrapper, className].join(" ")}>
      <header className={styles.header}>
        <div className={styles.headerBg} />
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <div className={styles.logoParent}>
              <img
                className={styles.logoIcon}
                loading="lazy"
                alt=""
                src="/logo.svg"
              />
              <nav className={styles.contactContainer}>
                <nav className={styles.contactButtonParent}>
                  <div className={styles.contactButton}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/placeholder.svg"
                    />
                    <div className={styles.textPadding}>
                      <a className={styles.text} href="/">Início</a>
                    </div>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/placeholder.svg"
                    />
                  </div>
                  <div className={styles.contactButtonWrapper}>
                    <div className={styles.contactButton}>
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
                  </div>
                  <div className={styles.contactButton2}>
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
    </section>
  );
};

export default FrameComponent2;
