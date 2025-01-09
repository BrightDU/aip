import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing all the themes
import ThemeOne from "../themes/theme-one";
import ThemeTwo from "../themes/theme-two";
import ThemeThree from '../themes/theme-three';
import ThemeFour from "../themes/theme-four";
import ThemeFive from "../themes/theme-five";
import ThemeSix from "../themes/theme-six";
import BlogTwoColumn from "../components/Blogs/BlogTwoColumn";
import BlogThreeColumn from "../components/Blogs/BlogThreeColumn";
import BlogLeftSidebar from "../components/Blogs/BlogLeftSidebar";
import BlogRightSidebar from "../components/Blogs/BlogRightSidebar";
import BlogDetailsLeftSidebar from "../components/Blogs/BlogDetailsLeftSidebar";
import BlogDetailsRightSidebar from "../components/Blogs/BlogDetailsRightSidebar";
import Reviews from "../components/ReviewSection/Reviews";
import Pricing from "../components/PricingSection/Pricing";
import DownloadPage from "../components/DownloadSection/DownloadPage";
import SubscribePage from "../components/SubscribeSection/SubscribePage";
import ThankYou from "../components/InnerSection/ThankYou";
import ComingSoon from "../components/InnerSection/ComingSoon";
import Login from "../components/Accounts/Login";
import Signup from "../components/Accounts/Signup";
import Forgot from "../components/Accounts/Forgot";
import Faq from "../components/FaqSection/Faq";
import ErrorPage from "../components/ErrorPage/404";
import ContactPage from "../components/ContactSection/ContactPage";
import App from '../App'
import strings from "../translations"
import Checkout from '../Checkout';
import FreeSubscription from '../FreeSubscription';
import { TermsAndConditions } from '../TermsAndConditions';
import FooterSection from '../components/FooterSection/Footer';
import Breadcrumb from '../components/Blogs/Breadcrumb'
import Header from '../components/HeaderSection/Header';
import TotalCheckout from '../TotalCheckout';
import TotalFreeSubscribtion from '../TotalFreeSubscribtion'
import ReferralForm from "../ReferralForm";
import axios from "axios";
let API = process.env.REACT_APP_API;


class MyRouts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: '',
      platformSettings: {}
    }

  }
  changeLanguage = (locale) => {

    if (locale.toLowerCase() === 'english' || locale === 'en') {
      strings.setLanguage('en');
      localStorage.setItem('locale', 'en')
      this.setState({ 'locale': 'en' });
      document.documentElement.setAttribute("lang", 'en');
      document.documentElement.setAttribute("dir", 'ltl');
    } else {
      strings.setLanguage('ar');
      localStorage.setItem('locale', 'ar')
      document.documentElement.setAttribute("lang", 'ar');
      document.documentElement.setAttribute("dir", 'rtl');
      localStorage.setItem('locale', 'ar')
      this.setState({ 'locale': 'ar' });
    }
  }
  componentDidMount() {

    axios.get(`${API}/management/platformSettings`, {
      headers: {
        "Accept-Language": strings.getLanguage()
      }
    }).then(({ data }) => {
      this.setState({ platformSettings: data });
    });

    let locale = localStorage.getItem('locale');

    strings.setLanguage(locale || 'en')
    this.changeLanguage(locale || 'en')
    this.setState({ 'locale': locale || 'en' });
  }
  render() {
    
    return (
      <div>
        <Router>
          <Header imageData={"/img/company_logo.svg"} platformSettings={this.state.platformSettings}  changeLanguage={this.changeLanguage}/>
          <Switch>
            <Route exact path="/" component={()=><ThemeFive platformSettings={this.state.platformSettings}/>} />
            {/* <Route exact path="/theme-one" component={ThemeOne} />
            <Route path="/theme-two" component={ThemeTwo} />
            <Route path="/theme-three" component={ThemeThree} />
            <Route path="/theme-four" component={ThemeFour} />
            <Route path="/theme-five" component={ThemeFive} />
            <Route path="/theme-six" component={ThemeSix} />
            <Route path="/blog-two-column" component={BlogTwoColumn} />
            <Route path="/blog-three-column" component={BlogThreeColumn} />
            <Route path="/blog-left-sidebar" component={BlogLeftSidebar} />
            <Route path="/blog-right-sidebar" component={BlogRightSidebar} />
            <Route path="/blog-details-left-sidebar" component={BlogDetailsLeftSidebar} />
            <Route path="/blog-details-right-sidebar" component={BlogDetailsRightSidebar} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/download-page" component={DownloadPage} />
            <Route path="/subscribe-page" component={SubscribePage} />
            <Route path="/thank-you" component={ThankYou} />
            <Route path="/coming-soon" component={ComingSoon} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/forgot" component={Forgot} /> */}
            {/* <Route path="/faq" component={Faq}  changeLanguage={this.changeLanguage}/> */}
            <Route path="/faq">
              <Faq changeLanguage={this.changeLanguage} />
            </Route>
            <Route path="/contact-page" component={ContactPage} />
            {/* <Route path="/" exact component={() => <Homepage {...this.props} locale={this.state.locale} />} /> */}
            <Route path="/checkout" exact component={()=><TotalCheckout platformSettings={this.state.platformSettings}/>} />
            <Route path="/referral/:id" exact component={()=><ReferralForm platformSettings={this.state.platformSettings}/>}/>

            {/* <Route  path="/checkout">
              <Breadcrumb/>
              <Checkout/>
            </Route> */}
            <Route path="/terms-and-conditions" exact component={TermsAndConditions} />
            {/* <Route path="/faq" exact component={Faq} /> */}
            <Route path="/demo" exact component={()=><TotalFreeSubscribtion platformSettings={this.state.platformSettings}/>} />
            <Route path="*" component={ErrorPage} />
          </Switch>
          <FooterSection />
        </Router>
      </div>
    );
  }
}
export default MyRouts;