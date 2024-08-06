import { FunctionComponent } from "react";
import AboutButton from "./AboutButton";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.headerWrapper, className].join(" ")}>
      <header className={styles.header}>
        <div className={styles.headerBg} />
        <div className={styles.headerButtonsWrapper}>
          <div className={styles.headerButtons}>
            <div className={styles.logoParent}>
              <img
                className={styles.logoIcon}
                loading="lazy"
                alt=""
                src="/logo.svg"
              />
              <nav className={styles.buttonsWrapper}>
                <nav className={styles.buttons}>
                  <div className={styles.contactButton}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/placeholder.svg"
                    />
                    <div className={styles.textPadding}>
                      <a className={styles.text}>INÍCIO</a>
                    </div>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/placeholder.svg"
                    />
                  </div>
                  <div className={styles.contactButtonParent}>
                    <div className={styles.contactButton1}>
                      <img
                        className={styles.placeholderIcon}
                        alt=""
                        src="/placeholder.svg"
                      />
                      <div className={styles.textPadding1}>
                        <div className={styles.text1}>servidores</div>
                      </div>
                      <img
                        className={styles.placeholderIcon}
                        alt=""
                        src="/placeholder.svg"
                      />
                    </div>
                    <div className={styles.contactButton2}>
                      <img
                        className={styles.placeholderIcon}
                        alt=""
                        src="/placeholder.svg"
                      />
                      <div className={styles.textPadding}>
                        <a className={styles.text2}>Servidores</a>
                      </div>
                      <img
                        className={styles.placeholderIcon}
                        alt=""
                        src="/placeholder.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.contactButton3}>
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
              </nav>
            </div>
            <div className={styles.contactButton4}>
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
              <div className={styles.contactButton5}>
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
    </div>
  );
};

export default FrameComponent1;
