<template>
    <div>
        <div id="fh5co-offcanvass">
            <ul>
                <li class="active"><a href="#" data-nav-section="home" v-text="trans.menu.home"></a></li>
                <li><a href="#" data-nav-section="about" v-text="trans.menu.about"></a></li>
                <li><a href="#" data-nav-section="general" v-text="trans.menu.general"></a></li>
                <li><a href="#" data-nav-section="spacecraft" v-text="trans.menu.spacecraft"></a></li>
                <li><a href="#" data-nav-section="instrumentation" v-text="trans.menu.instrumentation"></a></li>
                <li><a href="#" data-nav-section="database" v-text="trans.menu.database"></a></li>
                <li><a href="#" data-nav-section="participants" v-text="trans.menu.participants"></a></li>
                <li><a href="#" data-nav-section="references" v-text="trans.menu.references"></a></li>
            </ul>
            <h3 class="fh5co-lead" v-text="trans.menu.connect"></h3>
            <p class="fh5co-social-icons">
                <a href="https://twitter.com/Ionosat_Micro"><i class="icon-twitter"></i></a>
                <a href="https://www.facebook.com/Ionosat-Micro-2057381937818236/"><i class="icon-facebook"></i></a>
                <a href="https://www.youtube.com/channel/UCUk8PDAfVgpGkc3zP7OWAYA"><i class="icon-youtube"></i></a>
            </p>
            <ul>
                <li :class="{'active':trans.active === 'ua'}">
                    <a href="/ua" v-text="trans.menu.lang.ua"></a>
                </li>
                <li :class="{'active':trans.active === 'en'}">
                    <a href="/" v-text="trans.menu.lang.en"></a>
                </li>
            </ul>
        </div>

        <div id="fh5co-menu" class="navbar">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <a href="#"
                           class="js-fh5co-nav-toggle fh5co-nav-toggle"
                           data-toggle="collapse"
                           data-target="#fh5co-navbar"
                           aria-expanded="false"
                           aria-controls="navbar">
                            <span v-text="trans.menu.title"></span>
                            <i></i>
                        </a>
                        <a href="/" class="navbar-brand "><span v-text="trans.menu.brand"></span></a>
                        <a href="/ua" class="navbar-brand lang hidden-xs" :class="{'active':trans.active === 'ua'}">
                            <span v-text="trans.menu.lang.ua"></span>
                        </a>
                        <a href="/" class="navbar-brand lang hidden-xs" :class="{'active':trans.active === 'en'}">
                            <span v-text="trans.menu.lang.en"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div id="fh5co-page">
            <div id="fh5co-wrap">
                <header id="fh5co-hero" data-section="home" role="banner"
                        style="background: url(images/background.jpg) top left; background-size: cover;">
                    <div class="fh5co-overlay"></div>
                    <div class="fh5co-intro">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 fh5co-intro-img to-animate intro-animate-4">
                                    <img src="images/logo.gif" width="100%">
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <!-- END .header -->

                <div id="fh5co-main">
                    <div id="fh5co-features" data-section="about">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 col-md-offset-2 fh5co-section-heading text-center">
                                    <h2 class="fh5co-lead to-animate" v-text="trans.about.title"></h2>
                                    <p class="fh5co-sub to-animate" v-html="trans.about.subTitle"></p>
                                    <p class="fh5co-sub to-animate" v-html="trans.about.projectTask"></p>
                                </div>
                                <div class="col-md-12 col-sm-12 col-xs-12 col-xxs-12">
                                    <a class="fh5co-feature to-animate">
                                        <h3 class="fh5co-feature-lead" v-text="trans.about.patricular.title"></h3>
                                        <div v-html="trans.about.patricular.text"></div>
                                    </a>
                                </div>
                                <div class="col-md-12 col-sm-12 col-xs-12 col-xxs-12">
                                    <a class="fh5co-feature to-animate">
                                        <h3 class="fh5co-feature-lead" v-text="trans.about.registration.title"></h3>
                                        <div v-html="trans.about.registration.text"></div>
                                    </a>
                                </div>
                                <div class="col-md-12 col-sm-12 col-xs-12 col-xxs-12">
                                    <a class="fh5co-feature to-animate">
                                        <h3 class="fh5co-feature-lead" v-text="trans.about.methodological.title"></h3>
                                        <div v-html="trans.about.methodological.text"></div>
                                    </a>
                                </div>

                                <div class="clearfix visible-sm-block"></div>

                                <div class="fh5co-spacer fh5co-spacer-sm"></div>

                            </div>
                        </div>
                    </div>


                    <div id="fh5co-features-2" data-section="general">
                        <div class="fh5co-features-2-content">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8 col-md-offset-2 fh5co-section-heading text-center">
                                        <h2 class="fh5co-lead to-animate" v-text="trans.info.title"></h2>
                                        <p class="fh5co-sub to-animate" v-html="trans.info.customer"></p>
                                        <p class="fh5co-sub to-animate" v-html="trans.info.tasks"></p>
                                        <p class="fh5co-sub to-animate" v-html="trans.info.scientific"></p>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row text-center">
                                            <div class="col-md-12 col-sm-6 col-xs-6 col-xxs-12 fh5co-text animate-object features-2-animate-3">
                                                <h4 class="fh5co-uppercase-sm" v-text="trans.info.head.title"></h4>
                                                <p v-html="trans.info.head.text"></p>
                                            </div>
                                            <div class="col-md-12 col-sm-6 col-xs-6 col-xxs-12 fh5co-text animate-object features-2-animate-4">
                                                <h4 class="fh5co-uppercase-sm"
                                                    v-text="trans.info.spacecraft.title"></h4>
                                                <p v-html="trans.info.spacecraft.text"></p>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row text-center">
                                            <div class="col-md-12 col-sm-6 col-xs-6 col-xxs-12 fh5co-text animate-object features-2-animate-5">
                                                <h4 class="fh5co-uppercase-sm" v-text="trans.info.payload.title"></h4>
                                                <p v-html="trans.info.payload.text"></p>
                                            </div>
                                            <div class="col-md-12 col-sm-6 col-xs-6 col-xxs-12 fh5co-text animate-object features-2-animate-6">
                                                <h4 class="fh5co-uppercase-sm" v-text="trans.info.orbit.title"></h4>
                                                <p v-html="trans.info.orbit.text"></p>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>


                    <div id="fh5co-testimony">
                        <div class="container">
                            <div class="row animate-box">
                                <img src="images/Microsat-M.gif" width="50%" class="center-block">
                            </div>
                        </div>
                    </div>

                    <div id="fh5co-pricing" data-section="spacecraft">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 col-md-offset-2 fh5co-section-heading text-center">
                                    <h2 class="fh5co-lead animate-single pricing-animate-1"
                                        v-text="trans.orbit.title"></h2>
                                    <p class="fh5co-sub animate-single pricing-animate-2"
                                       v-text="trans.orbit.subTitle"></p>
                                </div>

                                <div class="col-md-12 to-animate" v-html="trans.orbit.table">
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id="fh5co-counter" class="fh5co-bg-section"
                         style="background-image: url(images/bg_1.jpg); background-attachment: fixed;">
                        <div class="fh5co-overlay"></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="fh5co-hero-wrap">
                                        <div class="fh5co-hero-intro text-center to-animate counter-animate">
                                            <div class="col-md-12 text-center">
                                        <span class="fh5co-counter js-counter" data-from="0" data-to="2019"
                                              data-speed="500" data-refresh-interval="50"></span>
                                                <span class="fh5co-counter-label" v-text="trans.launch"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id="fh5co-products" data-section="instrumentation">

                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 col-md-offset-2 fh5co-section-heading text-center">
                                    <h2 class="fh5co-lead animate-single product-animate-1"
                                        v-text="trans.scientific.title"></h2>
                                    <p class="fh5co-sub animate-single product-animate-2">
                                        <b v-text="trans.scientific.general.title"></b>
                                    </p>
                                    <p v-html="trans.scientific.general.text"></p>
                                    <hr>
                                    <p class="fh5co-sub animate-single product-animate-2">
                                        <b v-text="trans.scientific.OBDH.title"></b>
                                    </p>
                                    <p v-html="trans.scientific.OBDH.text"></p>
                                </div>


                                <div class="col-md-3 col-sm-6 col-xs-6 col-xxs-12">
                                    <a href="images/EP.jpg" class="fh5co-figure to-animate image-popup">
                                        <figure>
                                            <img src="images/EP.jpg" alt="Free HTML5 Responsive Template"
                                                 class="img-responsive">
                                        </figure>
                                        <h3 class="fh5co-figure-lead" v-text="trans.scientific.OBDH.MWC.title"></h3>
                                        <div v-html="trans.scientific.OBDH.MWC.text"></div>
                                    </a>
                                </div>
                                <div class="col-md-3 col-sm-6 col-xs-6 col-xxs-12">
                                    <a href="images/RFA.jpg" class="fh5co-figure to-animate image-popup">
                                        <figure>
                                            <img src="images/RFA.jpg" alt="Free HTML5 Responsive Template"
                                                 class="img-responsive">
                                        </figure>
                                        <h3 class="fh5co-figure-lead" v-text="trans.scientific.OBDH.RFA.title"></h3>
                                        <div v-html="trans.scientific.OBDH.RFA.text"></div>
                                    </a>
                                </div>
                                <div class="clearfix visible-sm-block"></div>
                                <div class="col-md-3 col-sm-6 col-xs-6 col-xxs-12">
                                    <a href="images/DN.jpg" class="fh5co-figure to-animate image-popup">
                                        <figure>
                                            <img src="images/DN.jpg" alt="Free HTML5 Responsive Template"
                                                 class="img-responsive">
                                        </figure>
                                        <h3 class="fh5co-figure-lead" v-text="trans.scientific.OBDH.PDA.title"></h3>
                                        <div v-html="trans.scientific.OBDH.PDA.text"></div>
                                    </a>
                                </div>
                                <div class="col-md-3 col-sm-6 col-xs-6 col-xxs-12">
                                    <a href="images/IDM.jpg" class="fh5co-figure to-animate image-popup">
                                        <figure>
                                            <img src="images/IDM.jpg" alt="Free HTML5 Responsive Template"
                                                 class="img-responsive">
                                        </figure>
                                        <h3 class="fh5co-figure-lead" v-text="trans.scientific.OBDH.IDM.title"></h3>
                                        <div v-html="trans.scientific.OBDH.IDM.text"></div>
                                    </a>
                                </div>

                                <div class="clearfix visible-sm-block"></div>

                                <div class="fh5co-spacer fh5co-spacer-sm"></div>
                            </div>
                        </div>

                    </div>

                    <div id="fh5co-features-4" data-section="database">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 col-md-offset-2 fh5co-section-heading text-center">
                                    <h2 class="fh5co-lead animate-single features3-animate-1"
                                        v-text="trans.database.title"></h2>
                                    <p class="fh5co-sub animate-single features3-animate-2"
                                       v-html="trans.database.subTitle"></p>
                                </div>

                                <div class="col-md-12 col-sm-12 fh5co-text-wrap">
                                    <div class="fh5co-text to-animate" v-html="trans.database.table"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="fh5co-bg-section cta" id="fh5co-cta"
                         style="background-image: url(images/hero_bg.jpg); background-attachment: fixed;">
                        <div class="fh5co-overlay">
                                <video width="100%" height="100%" preload="auto" autoplay="autoplay" loop="loop" muted="muted">
                                    <source src="video/satellite.mp4" type="video/mp4"></source>
                                </video>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="fh5co-hero-wrap">
                                        <div class="fh5co-hero-intro text-center">
                                            <div class="row">
                                                <div class="col-md-8 col-md-offset-2 fh5co-section-heading text-center">
                                                    <h2 class="fh5co-lead to-animate"
                                                        v-text="trans.satellite.title"></h2>
                                                    <p class="fh5co-sub to-animate"
                                                       v-text="trans.satellite.subTitle"></p>
                                                    <div class="to-animate">
                                                        <a href="https://youtu.be/-POoZHaMJaA" class="btn btn-primary"
                                                           target="_blank"
                                                           v-text="trans.satellite.video"></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="fh5co-features-3" data-section="participants">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 col-md-offset-2 fh5co-section-heading text-center">
                                    <h2 class="fh5co-lead animate-single features3-animate-1"
                                        v-text="trans.participants.title"></h2>
                                </div>
                                <div class="col-md-12 col-sm-12 fh5co-text-wrap">
                                    <div class="fh5co-text to-animate" v-html="trans.participants.table"></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 col-sm-12 col-xs-12 col-xxs-12">
                                    <div class="fh5co-figure to-animate">
                                        <figure>
                                            <img src="images/Georgii_Lizunov.png" alt="Project Investigator"
                                                 class="img-responsive">
                                        </figure>
                                        <h3 class="fh5co-figure-lead"
                                            v-text="trans.participants.person.lizunov.title"></h3>
                                        <p v-text="trans.participants.person.lizunov.name"></p>
                                        <p><a href="mailto:georgii.lizunov@gmail.com"></a></p>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-12 col-xs-12 col-xxs-12">
                                    <div class="fh5co-figure to-animate">
                                        <figure>
                                            <img src="images/ojO1J_croper_ru.jpeg" alt="Technical manager"
                                                 class="img-responsive">
                                        </figure>
                                        <h3 class="fh5co-figure-lead"
                                            v-text="trans.participants.person.lukeniuk.title"></h3>
                                        <p v-text="trans.participants.person.lukeniuk.name"></p>
                                        <p><a href="mailto:luk@isr.lviv.ua">luk@isr.lviv.ua</a></p>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-12 col-xs-12 col-xxs-12">
                                    <div class="fh5co-figure to-animate">
                                        <figure>
                                            <img src="images/Screenshot%20from%202017-10-14%2018-17-36.png"
                                                 alt="Free HTML5 Responsive Template"
                                                 class="img-responsive">
                                        </figure>
                                        <h3 class="fh5co-figure-lead"
                                            v-text="trans.participants.person.masley.title"></h3>
                                        <p v-text="trans.participants.person.masley.name"></p>
                                        <p><a href="mailto:info@yuzhnoye.com">info@yuzhnoye.com</a></p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12 col-sm-12 fh5co-text-wrap">
                                <div class="fh5co-text to-animate" v-html="trans.participants.table2"></div>
                            </div>
                        </div>
                    </div>
                    <div id="fh5co-faqs" data-section="references">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 col-md-offset-2 fh5co-section-heading text-center">
                                    <h2 class="fh5co-lead animate-single faqs-animate-1"
                                        v-text="trans.references.title"></h2>
                                </div>
                            </div>
                        </div>


                        <div class="container">
                            <div class="faq-accordion to-animate active">
                                <span class="faq-accordion-icon-toggle active"><i class="icon-arrow-down"></i></span>
                                <h3 v-text="trans.references.monograph.title"></h3>
                                <div class="faq-body" style="display: block;">
                                    <p>
                                        <b>
                                            <a href="documents/Ionosat-Micro.pdf" target="_blank"
                                               v-text="trans.references.monograph.url"></a>
                                        </b>
                                    </p>
                                    <p v-text="trans.references.monograph.footer"></p>
                                </div>
                            </div>
                            <div class="faq-accordion to-animate">
                                <span class="faq-accordion-icon-toggle"><i class="icon-arrow-down"></i></span>
                                <h3 v-text="trans.references.monograph.title"></h3>
                                <div class="faq-body">
                                    <p>
                                        <b v-text="trans.references.monograph.url"></b>
                                    </p>
                                    <p v-text="trans.references.monograph.footer"></p>
                                </div>
                            </div>
                            <div class="faq-accordion to-animate">
                                <span class="faq-accordion-icon-toggle"><i class="icon-arrow-down"></i></span>
                                <h3 v-text="trans.references.background.title"></h3>
                                <div class="faq-body">
                                    <p>
                                        <b v-text="trans.references.background.url"></b>
                                    </p>
                                    <p v-text="trans.references.background.footer"></p>
                                </div>
                            </div>
                            <div class="faq-accordion to-animate">
                                <span class="faq-accordion-icon-toggle"><i class="icon-arrow-down"></i></span>
                                <h3 v-text="trans.references.review.title"></h3>
                                <div class="faq-body">
                                    <p>
                                        <b>
                                            <a href="documents/Tseli_i_metody___Kosmicheskiy_proekt_Ionosat-Mikro.pdf"
                                               target="_blank"
                                               v-text="trans.references.review.url">
                                            </a>
                                        </b>
                                    </p>
                                    <p v-text="trans.references.review.footer"></p>
                                </div>
                            </div>
                            <div class="faq-accordion to-animate">
                                <span class="faq-accordion-icon-toggle"><i class="icon-arrow-down"></i></span>
                                <h3 v-text="trans.references.spacecraft.title"></h3>
                                <div class="faq-body">
                                    <p>
                                        <b>
                                            <a href="documents/MICROSAT__Kosmicheskiy_proekt_Ionosat-Mikro.pdf"
                                               target="_blank"
                                               v-text="trans.references.spacecraft.url">
                                            </a>
                                        </b>
                                    </p>
                                    <p v-text="trans.references.spacecraft.footer"></p>
                                </div>
                            </div>
                            <div class="faq-accordion to-animate">
                                <span class="faq-accordion-icon-toggle"><i class="icon-arrow-down"></i></span>
                                <h3 v-text="trans.references.MWC.title"></h3>
                                <div class="faq-body">
                                    <p>
                                        <b>
                                            <a href="documents/MWS___Kosmicheskiy_proekt_Ionosat-Mikro.pdf"
                                               target="_blank"
                                               v-text="trans.references.MWC.url">
                                            </a>
                                        </b>
                                    </p>
                                    <p v-text="trans.references.MWC.footer"></p>
                                </div>
                            </div>
                            <div class="faq-accordion to-animate">
                                <span class="faq-accordion-icon-toggle"><i class="icon-arrow-down"></i></span>
                                <h3 v-text="trans.references.WP.title"></h3>
                                <div class="faq-body">
                                    <p>
                                        <b v-text="trans.references.WP.url"></b>
                                    </p>
                                    <p v-text="trans.references.WP.footer"></p>
                                </div>
                            </div>
                            <div class="faq-accordion to-animate">
                                <span class="faq-accordion-icon-toggle"><i class="icon-arrow-down"></i></span>
                                <h3 v-text="trans.references.PDA.title"></h3>
                                <div class="faq-body">
                                    <p>
                                        <b>
                                            <a href="documents/DN-DE__Kosmicheskiy_proekt_Ionosat-Mikro.pdf"
                                               target="_blank"
                                               v-text="trans.references.PDA.url">
                                            </a>
                                        </b>
                                    </p>
                                    <p v-text="trans.references.PDA.footer"></p>
                                </div>
                            </div>
                            <div class="faq-accordion to-animate">
                                <span class="faq-accordion-icon-toggle"><i class="icon-arrow-down"></i></span>
                                <h3 v-text="trans.references.RFA.title"></h3>
                                <div class="faq-body">
                                    <p>
                                        <b>
                                            <a href="documents/RFA__Kosmicheskiy_proekt_Ionosat-Mikro.pdf"
                                               target="_blank"
                                               v-text="trans.references.RFA.url">
                                            </a>
                                        </b>
                                    </p>
                                    <p v-text="trans.references.RFA.footer"></p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <footer id="fh5co-footer" style="">
                <div class="fh5co-overlay"></div>
                <div class="fh5co-footer-content">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 col-sm-4 col-md-push-3">
                                <h3 class="fh5co-lead" v-text="trans.menu.title"></h3>
                                <ul>
                                    <li><a href="#" data-nav-section="home" v-text="trans.menu.home"></a></li>
                                    <li><a href="#" data-nav-section="about" v-text="trans.menu.about"></a></li>
                                    <li><a href="#" data-nav-section="general" v-text="trans.menu.general"></a></li>
                                    <li><a href="#" data-nav-section="spacecraft" v-text="trans.menu.spacecraft"></a>
                                    </li>
                                    <li><a href="#" data-nav-section="instrumentation"
                                           v-text="trans.menu.instrumentation"></a></li>
                                    <li><a href="#" data-nav-section="database" v-text="trans.menu.database"></a></li>
                                    <li><a href="#" data-nav-section="participants"
                                           v-text="trans.menu.participants"></a></li>
                                    <li><a href="#" data-nav-section="references" v-text="trans.menu.references"></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-sm-4 col-md-push-3">
                                <h3 class="fh5co-lead" v-text="trans.footer.info.title"></h3>
                                <ul>
                                    <li>
                                        <a href="https://uk.wikipedia.org/wiki/%D0%86%D0%BE%D0%BD%D0%BE%D1%81%D0%B0%D1%82-%D0%9C%D1%96%D0%BA%D1%80%D0%BE"
                                           v-text="trans.footer.info.wikipedia"></a>
                                    </li>
                                    <li><a href="http://nearspace.ikd.kiev.ua/" v-text="trans.footer.info.site"></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-sm-4 col-md-push-3">
                                <h3 class="fh5co-lead" v-text="trans.footer.links.title"></h3>
                                <ul>
                                    <li><a href="https://www.promis.ikd.kiev.ua/"
                                           v-text="trans.footer.links.PROMIS"></a></li>
                                    <li><a href="http://www.nkau.gov.ua/" v-text="trans.footer.links.SSAU"></a></li>
                                    <li><a href="http://www.yuzhnoye.com/" v-text="trans.footer.links.yuzhnoye"></a>
                                    </li>
                                    <li><a href="http://www.ikd.kiev.ua/" v-text="trans.footer.links.ISR"></a></li>
                                </ul>
                            </div>

                            <div class="col-md-3 col-sm-12 col-md-pull-9">
                                <div class="fh5co-footer-logo"><a href="/" v-text="trans.menu.brand"></a></div>
                                <p class="fh5co-copyright">
                                    <small>&copy; 2017. All Rights Reserved. <br> by <a
                                            href="https://alex-kovalchuk.site/"
                                            target="_blank">mammut</a></small>
                                </p>
                                <p class="fh5co-social-icons">
                                    <a href="https://twitter.com/Ionosat_Micro"><i class="icon-twitter"></i></a>
                                    <a href="https://www.facebook.com/Ionosat-Micro-2057381937818236/"><i
                                            class="icon-facebook"></i></a>
                                    <a href="https://www.youtube.com/channel/UCUk8PDAfVgpGkc3zP7OWAYA"><i
                                            class="icon-youtube"></i></a>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                trans: window.trans
            }
        },
    }
</script>