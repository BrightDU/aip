import React, { Component } from "react";

import Header from "../components/HeaderSection/Header";
import HeroSection from "../components/HeroSection/HeroFive";
import FeatureSection from "../components/Features/FeatureFive";
import AboutPage from "../components/Aboutsection/Newabout";
import ServiceSection from "../components/ServiceSection/ServiceFive";
import DiscoverSection from "../components/DiscoverSection/DiscoverFive";
import Work from "../components/WorkSection/Work";
import ScreenshotSection from "../components/ScreenshotSection/ScreenshotsTwo";
// import ReviewSection from "../components/ReviewSection/ReviewTwo";
import PricingSection from '../components/PricingSec.js/PricingSection'
import FaqSection from "../components/FaqSection/FaqOne";
import Download from "../components/DownloadSection/Download";
import Subscribe from "../components/SubscribeSection/Subscribe";
import Team from "../components/TeamSection/Team";
import ContactSection from "../components/ContactSection/Contact";
import FooterSection from "../components/FooterSection/Footer";
import Counter from "../components/CounterSection/Counter";
import * as FeatureSection2 from "../components/Features/FeatureThree";
import strings from "../translations";
import Client from "../components/OurclientSection/Client";
import { Route } from "react-router-dom";
import GoPay from "../components/Gopay/gopay";


class ThemeFive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: ''
    }
  }
  changeLanguage = (locale) => {
    if (locale.toLowerCase() === "english" || locale === "en") {
      strings.setLanguage("en");
      localStorage.setItem("locale", "en");
      this.setState({ locale: "en" });
      document.documentElement.setAttribute("lang", "en");
      document.documentElement.setAttribute("dir", "ltl");
    } else {
      strings.setLanguage("ar");
      localStorage.setItem("locale", "ar");
      document.documentElement.setAttribute("lang", "ar");
      document.documentElement.setAttribute("dir", "rtl");
      localStorage.setItem("locale", "ar");
      this.setState({ locale: "ar" });
    }
  };
  componentDidMount() {
    console.log(this.props)
    let locale = localStorage.getItem("locale");
    let isSafari = /constructor/i.test(window.HTMLElement) ||(function (p) { return p.toString() === "[object SafariRemoteNotification]";})(!window["safari"] || (typeof safari !== "undefined" && window["safari"].pushNotification));
    console.log({ isSafari });

    if (locale == null) {
      locale = "ar";
    }

    strings.setLanguage(locale);
    this.changeLanguage(locale);
    this.setState({ locale: locale });
  }
  render() {
    return (
      <div className="homepage-5">
        {/*====== Scroll To Top Area Start ======*/}
        <div id="scrollUp" title="Scroll To Top">
          <i className="fas fa-arrow-up" />
        </div>
        {/*====== Scroll To Top Area End ======*/}
        <div className="main">
          {/* <Header imageData={"/img/company_logo.svg"}  changeLanguage={this.changeLanguage}/> */}
          <HeroSection platformSettings={this.props.platformSettings} />
          <AboutPage />
          <Counter />
          <GoPay />

          

          <FeatureSection2.default />
          <FeatureSection />
         
          {/* <ReviewSection /> */}
         
         
         

          

          {/* <DiscoverSection /> */}
         
          
          <Client />
          <PricingSection {...this.props} locale={this.state.locale} />

         
         
          {/* <ServiceSection /> */}
          {/* <ScreenshotSection /> */}
          {/* <Work /> */}
          {/* <FaqSection /> */}
          {/* <Download />
                    <Subscribe /> */}
                    <Team />
          <ContactSection />
          {/* <FooterSection /> */}
        </div>
      </div>
    );
  }
}

export default ThemeFive;
