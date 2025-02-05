import React, { Component } from 'react';
import Header from '../HeaderSection/Header';

import TutorialSection from './Tutorialsection';
import Breadcrumb from '../Blogs/Breadcrumb';
import DownloadSection from '../DownloadSection/Download';
import ContactSection from '../ContactSection/Contact';
import FooterSection from '../FooterSection/Footer';
import strings from '../../translations';
class TutorialPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
            locale: ''
        }
    }
    render() {
        
        return (
            <div>
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    {/* <Header imageData={"/img/company_logo.svg"} changeLanguage={this.props.changeLanguage} /> */}
                    <Breadcrumb title={strings.tutorial} />
                    <TutorialSection />
                    {/* <DownloadSection /> */}
                    <ContactSection />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default TutorialPage;