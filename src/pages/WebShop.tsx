import { FunctionComponent } from "react";
import Header3 from "../components/Header3";
import Footer from "../components/Footer";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent2 from "../components/GroupComponent2";
import styles from "./WebShop.module.css";

const WebShop: FunctionComponent = () => {
  return (
    <div className={styles.webShop}>
      <div className={styles.bg} />
      <img className={styles.bgIcon} alt="" src="/bg.svg" />
      <Header3 />
      <Footer
        propAlignSelf="unset"
        propPosition="absolute"
        propMargin="0 !important"
        propRight="0px"
        propBottom="0px"
        propLeft="0px"
        propBackdropFilter="blur(20px)"
        pEWPEWLogo="/pewpew-logo.svg"
        placeholder="/placeholder1.svg"
        text="20 jogadores online"
        iconTrailing={false}
        iconLeading
      />
      <main className={styles.footerNavigation}>
        <div className={styles.footerNavigationChild} />
        <div className={styles.footerNavigationItem} />
        <img
          className={styles.arrowSquareLeftIcon}
          loading="lazy"
          alt=""
          src="/arrowsquareleft.svg"
        />
        <img
          className={styles.arrowSquareRightIcon}
          loading="lazy"
          alt=""
          src="/arrowsquareright.svg"
        />
        <section className={styles.productSlider}>
          <div className={styles.productSliderContent}>
            <div className={styles.productSliderItemOne}>
              <div className={styles.productSliderImageOne} />
            </div>
            <GroupComponent1 layer04="/layer0-4@2x.png" />
          </div>
          <div className={styles.productSliderItemTwo}>
            <div className={styles.productSliderInfoTwo}>
              <div className={styles.productSliderNameTwo}>
                <div className={styles.productSliderTagTwo}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.productSliderImageTwo}>
                      <img
                        className={styles.maskGroupIcon}
                        loading="lazy"
                        alt=""
                        src="/mask-group2@2x.png"
                      />
                      <div className={styles.productSliderBackgroundTwo} />
                    </div>
                    <div className={styles.productSliderNameContainer}>
                      <div className={styles.novaJerseySaw}>
                        NOVA JERSEY SAW 2024
                      </div>
                      <b className={styles.produzidaEmPortugal}>
                        Produzida em Portugal
                      </b>
                    </div>
                    <div className={styles.aboutButton}>
                      <img
                        className={styles.placeholderIcon}
                        alt=""
                        src="/placeholder1.svg"
                      />
                      <div className={styles.textPadding}>
                        <div className={styles.text}>COMPRA JÁ</div>
                      </div>
                      <img
                        className={styles.placeholderIcon}
                        alt=""
                        src="/placeholder.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameItem} />
                    <div className={styles.productSliderNameThree}>
                      <div className={styles.productSliderTagThree}>
                        <h2 className={styles.sawJersey}>SAW JERSeY</h2>
                        <div className={styles.productSliderImageThree}>
                          <img
                            className={styles.layer01Icon}
                            loading="lazy"
                            alt=""
                            src="/layer0-1@2x.png"
                          />
                          <b className={styles.produzidaEmPortugal1}>
                            Produzida em Portugal
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className={styles.aboutButton1}>
                      <img
                        className={styles.placeholderIcon}
                        alt=""
                        src="/placeholder.svg"
                      />
                      <div className={styles.textPadding}>
                        <b className={styles.text1}>COMPRA JÁ</b>
                      </div>
                      <img
                        className={styles.placeholderIcon}
                        alt=""
                        src="/placeholder.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.productSliderItemFour}>
                  <div className={styles.productSliderNameFour}>
                    <b className={styles.produtosEmPromoo}>
                      Produtos em promoção
                    </b>
                  </div>
                  <img
                    className={styles.arrowDownRightIcon}
                    alt=""
                    src="/arrowdownright.svg"
                  />
                </div>
              </div>
              <div className={styles.productCategories}>
                <div className={styles.productCategoryOne}>
                  <GroupComponent1
                    propWidth="unset"
                    propAlignSelf="stretch"
                    propOpacity="unset"
                    propPadding="0px 0px 8px"
                    propPadding1="27px 48px 28px 50px"
                    layer04="/layer0-4@2x.png"
                  />
                  <div className={styles.newProductsLink}>
                    <div className={styles.newProductsButton}>
                      <div className={styles.newProductsAction}>
                        <b className={styles.novosProdutos}>Novos produtos</b>
                      </div>
                      <img
                        className={styles.arrowDownRightIcon1}
                        alt=""
                        src="/arrowdownright.svg"
                      />
                    </div>
                    <GroupComponent1
                      propWidth="unset"
                      propAlignSelf="stretch"
                      propOpacity="unset"
                      propPadding="unset"
                      propPadding1="27px 48px 28px 50px"
                      layer04="/layer0-4@2x.png"
                    />
                  </div>
                  <GroupComponent2 layer05="/layer0-4@2x.png" />
                </div>
                <div className={styles.productCategoryOne1}>
                  <div className={styles.frameParent}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.frameInner} />
                      <div className={styles.layer02Parent}>
                        <img
                          className={styles.layer02Icon}
                          alt=""
                          src="/layer0-2@2x.png"
                        />
                        <div className={styles.groupDiv}>
                          <div className={styles.rectangleDiv} />
                          <img
                            className={styles.plusSquareIcon}
                            loading="lazy"
                            alt=""
                            src="/plussquare.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.jerseySaw2024Parent}>
                      <div className={styles.jerseySaw2024}>
                        Jersey SAW 2024
                      </div>
                      <div className={styles.div}>
                        <sup>
                          <span className={styles.span}>65€</span>
                        </sup>
                        <span className={styles.span1}> 50€</span>
                      </div>
                    </div>
                  </div>
                  <GroupComponent1
                    propWidth="unset"
                    propAlignSelf="stretch"
                    propOpacity="unset"
                    propPadding="unset"
                    propPadding1="27px 48px 28px 50px"
                    layer04="/layer0-4@2x.png"
                  />
                  <GroupComponent2 layer05="/layer0-4@2x.png" />
                </div>
                <div className={styles.productGridParent}>
                  <div className={styles.productGrid}>
                    <GroupComponent1
                      propWidth="unset"
                      propAlignSelf="stretch"
                      propOpacity="unset"
                      propPadding="0px 0px 76px"
                      propPadding1="27px 48px 28px 50px"
                      layer04="/layer0-4@2x.png"
                    />
                    <GroupComponent1
                      propWidth="unset"
                      propAlignSelf="stretch"
                      propOpacity="unset"
                      propPadding="unset"
                      propPadding1="27px 48px 28px 50px"
                      layer04="/layer0-4@2x.png"
                    />
                    <GroupComponent2 layer05="/layer0-4@2x.png" />
                  </div>
                  <div className={styles.productPair}>
                    <div className={styles.productImage}>
                      <div className={styles.productImageChild} />
                      <img
                        className={styles.layer04Icon}
                        alt=""
                        src="/layer0-4@2x.png"
                      />
                    </div>
                    <div className={styles.jerseySaw2024Group}>
                      <div className={styles.jerseySaw2024}>
                        Jersey SAW 2024
                      </div>
                      <div className={styles.div}>
                        <sup>
                          <span className={styles.span}>65€</span>
                        </sup>
                        <span className={styles.span1}> 50€</span>
                      </div>
                    </div>
                    <div className={styles.frameGroup}>
                      <div className={styles.filterIconBackgroundParent}>
                        <div className={styles.filterIconBackground} />
                        <div className={styles.filterIcon}>
                          <img
                            className={styles.starIcon}
                            loading="lazy"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                        <div className={styles.recommended}>Recommended</div>
                      </div>
                      <div className={styles.filterOption}>
                        <div className={styles.filterIconBackgroundGroup}>
                          <div className={styles.filterIconBackground1} />
                          <div className={styles.filterIcon}>
                            <img
                              className={styles.starIcon}
                              alt=""
                              src="/vector.svg"
                            />
                          </div>
                          <div className={styles.popularidade}>
                            Popularidade
                          </div>
                        </div>
                        <div className={styles.frameDiv}>
                          <div className={styles.frameChild1} />
                          <div className={styles.priceIconBackgroundParent}>
                            <div className={styles.priceIconBackground} />
                            <div className={styles.filterIcon}>
                              <img
                                className={styles.starIcon}
                                alt=""
                                src="/vector-2.svg"
                              />
                            </div>
                            <div className={styles.maiorPreo}>Maior Preço</div>
                          </div>
                          <div className={styles.layer04Parent}>
                            <img
                              className={styles.layer04Icon1}
                              alt=""
                              src="/layer0-4@2x.png"
                            />
                            <div className={styles.frameChild2} />
                            <div className={styles.filterIcon}>
                              <img
                                className={styles.starIcon}
                                alt=""
                                src="/vector-3.svg"
                              />
                            </div>
                            <div className={styles.maiorPreo}>Menor Preço</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.jerseySaw2024Container}>
                      <div className={styles.jerseySaw20242}>
                        Jersey SAW 2024
                      </div>
                      <div className={styles.div2}>
                        <sup>
                          <span className={styles.span}>65€</span>
                        </sup>
                        <span className={styles.span1}> 50€</span>
                      </div>
                    </div>
                    <GroupComponent2 layer05="/layer0-4@2x.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productRow}>
            <GroupComponent1
              propWidth="unset"
              propAlignSelf="stretch"
              propOpacity="0.2"
              propPadding="unset"
              propPadding1="32px 48px 23px 50px"
              layer04="/layer0-4@2x.png"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default WebShop;
