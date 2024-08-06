import { FunctionComponent } from "react";
import AboutButton from "./AboutButton";
import styles from "./MainContent.module.css";

export type MainContentType = {
  className?: string;
};

const MainContent: FunctionComponent<MainContentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.mainContent, className].join(" ")}>
      <header className={styles.header}>
        <div className={styles.headerBg} />
        <div className={styles.headerContent}>
          <div className={styles.headerElements}>
            <div className={styles.logoButtons}>
              <div className={styles.buttonsRow}>
                <img
                  className={styles.logoIcon}
                  loading="lazy"
                  alt=""
                  src="/logo.svg"
                />
                <nav className={styles.contactButtons}>
                  <nav className={styles.contactParent}>
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
                    <div className={styles.contactButton}>
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
                    <div className={styles.contactButtonTwo}>
                      <div className={styles.contactButton2}>
                        <img
                          className={styles.placeholderIcon}
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className={styles.textPadding}>
                          <a className={styles.text2}>Contactos</a>
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
                        <div className={styles.textPadding3}>
                          <div className={styles.text3}>Contactos</div>
                        </div>
                        <img
                          className={styles.placeholderIcon}
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                  </nav>
                </nav>
              </div>
              <div className={styles.aboutContact}>
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

export default MainContent;
