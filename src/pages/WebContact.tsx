import { FunctionComponent } from "react";
import Header from "../components/Header";
import GroupComponent from "../components/GroupComponent";
import Footer from "../components/Footer";
import styles from "./WebContact.module.css";

const WebContact: FunctionComponent = () => {
  return (
    <div className={styles.webContact}>
      <div className={styles.bg} />
      <div className={styles.webContactChild} />
      <img className={styles.bgIcon} alt="" src="/bg.svg" />
      <Header />
      <main className={styles.content}>
        <section className={styles.frameParent}>
          <div className={styles.ellipseWrapper}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.touchContainerWrapper}>
            <div className={styles.touchContainer}>
              <div className={styles.touchHeading}>
                <div className={styles.contactosParent}>
                  <h3 className={styles.contactos}>Contactos</h3>
                  <h1 className={styles.entraEmContacto}>ENTRA EM CONTACTO</h1>
                </div>
                <h3 className={styles.getInTouch}>Get in touch!</h3>
              </div>
              <div className={styles.linksWrapper}>
                <div className={styles.links}>
                  <div className={styles.frameGroup}>
                    <GroupComponent
                      heartHand="/hearthand.svg"
                      sUPORTE="sUPORTE"
                      supportsweetricerspt="support@sweetricers.pt"
                    />
                    <GroupComponent
                      heartHand="/diamond01.svg"
                      sUPORTE="PARCERIAS"
                      supportsweetricerspt="partner@sweetricers.pt"
                    />
                  </div>
                  <div className={styles.frameGroup}>
                    <GroupComponent
                      heartHand="/shoppingbag02.svg"
                      sUPORTE="LOJA"
                      supportsweetricerspt="store@sweetricers.pt"
                    />
                    <div className={styles.rectangleParent}>
                      <div className={styles.frameItem} />
                      <img
                        className={styles.mail02Icon}
                        loading="lazy"
                        alt=""
                        src="/mail02.svg"
                      />
                      <div className={styles.geralParent}>
                        <h1 className={styles.geral}>Geral</h1>
                        <div className={styles.contactsweetricersptWrapper}>
                          <h3 className={styles.contactsweetricerspt}>
                            contact@sweetricers.pt
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ellipseContainer}>
            <div className={styles.frameInner} />
          </div>
        </section>
        <Footer
          pEWPEWLogo="/pewpew-logo.svg"
          placeholder="/placeholder1.svg"
          text="20 jogadores online"
          iconTrailing={false}
          iconLeading
        />
      </main>
    </div>
  );
};

export default WebContact;
