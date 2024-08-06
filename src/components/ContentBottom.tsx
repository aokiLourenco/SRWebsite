import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";
import styles from "./ContentBottom.module.css";

export type ContentBottomType = {
  className?: string;
};

const ContentBottom: FunctionComponent<ContentBottomType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.contentBottom, className].join(" ")}>
      <div className={styles.contentBottomChild} />
      <div className={styles.footerContentWrapper}>
        <div className={styles.footerContent}>
          <div className={styles.contactInfo}>
            <div className={styles.contactDetails}>
              <h3 className={styles.contactos}>Contactos</h3>
              <h1 className={styles.entraEmContacto}>ENTRA EM CONTACTO</h1>
            </div>
            <h3 className={styles.getInTouch}>Get in touch!</h3>
          </div>
          <div className={styles.footerContentInner}>
            <div className={styles.frameParent}>
              <GroupComponent
                heartHand="/hearthand.svg"
                sUPORTE="sUPORTE"
                supportsweetricerspt="support@sweetricers.pt"
              />
              <GroupComponent
                heartHand="/shoppingbag02.svg"
                sUPORTE="LOJA"
                supportsweetricerspt="store@sweetricers.pt"
              />
            </div>
          </div>
          <div className={styles.footerContentChild}>
            <div className={styles.frameParent}>
              <GroupComponent
                heartHand="/diamond01.svg"
                sUPORTE="PARCERIAS"
                supportsweetricerspt="partner@sweetricers.pt"
              />
              <GroupComponent
                heartHand="/mail02.svg"
                sUPORTE="Geral"
                supportsweetricerspt="contact@sweetricers.pt"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBottom;
