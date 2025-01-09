import React, { Component } from 'react';
import strings from '../../translations'
const initData = {
    preHeading: "Premium",
    preHeadingspan: "Features",
    heading: "Express Functionality",
    headingText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
    headingTexttwo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati."
}

const data = [
    {
        image: "/img/featured_image_1.png",
        title: "Fully functional",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
    },
    {
        image: "/img/featured_image_2.png",
        title: "Live Chat",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
    },
    {
        image: "/img/featured_image_3.png",
        title: "Secure Data",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
    },
    {
        image: "/img/featured_image_4.png",
        title: "Easy to Customize",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
    },
    {
        image: "/img/featured_image_5.png",
        title: "Responsive Design",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
    },
    {
        image: "/img/featured_image_6.png",
        title: "Help Documentation",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
    }
]

class FeatureSection extends Component {
    state = {
        initData: {},
        data: []
    }
    componentDidMount() {
        this.setState({
            initData: initData,
            data: data
        })
    }
    render() {
        return (
            <section id="features" className="section features-area style-two overflow-hidden ptb_100">
                <div className="container">
                    <div className="row ">
                        <div className="col-12 col-md-10 col-lg-6">
                            {/* Section Heading */}
                            <div className="section-heading" style={{ justifyContent: strings.direction, textAlign: strings.direction }}>
                                {/* <span className="d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3">
                            <i className="far fa-lightbulb text-primary mr-1" />
                            <span className="text-primary">{this.state.initData.preHeading}</span>
                            {this.state.initData.preHeadingspan}
                        </span> */}
                                <h2 style={{ textAlign: strings.direction, float: strings.direction }}>{strings.services}</h2>
                                {/* <p className="d-none d-sm-block mt-4">{this.state.initData.headingText}</p>
                        <p className="d-block d-sm-none mt-4">{this.state.initData.headingTexttwo}</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="ser">
                        {/* {this.state.data.map((item, idx) => {
                            return(
                        );
                        })} */}
                        <div key={`ffd_${1}`} className="col-12 col-md-6 col-lg-4 my-3 res-margin">
                            {/* Image Box */}
                            <div className="image-box text-center icon-1 p-5 cardF">
                                {/* Featured Image */}
                                <div className="featured-img mb-3">
                                {/* <img src="https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/64/000000/external-payment-supermarket-photo3ideastudio-lineal-color-photo3ideastudio.png"/> */}
                                <img src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-payment-financial-itim2101-lineal-color-itim2101-3.png"/>
                                </div>
                                {/* Icon Text */}
                                <div className="icon-text">
                                    <h3 className="mb-2">{strings.service1Title}</h3>
                                    <p>{strings.service1Description}</p>
                                </div>
                            </div>
                        </div>
                        <div key={`ffd_${2}`} className="col-12 col-md-6 col-lg-4 my-3 res-margin">
                            {/* Image Box */}
                            <div className="image-box text-center icon-1 p-5 cardF">
                                {/* Featured Image */}
                                <div className="featured-img mb-3">
                                <img src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-point-of-sale-gadget-itim2101-lineal-color-itim2101.png"/>                                  </div>
                                {/* Icon Text */}
                                <div className="icon-text">
                                    <h3 className="mb-2">{strings.service2Title}</h3>
                                    <p>{strings.service2Description}</p>
                                </div>
                            </div>
                        </div>
                        <div key={`ffd_${3}`} className="col-12 col-md-6 col-lg-4 my-3 res-margin">
                            {/* Image Box */}
                            <div className="image-box text-center icon-1 p-5 cardF">
                                {/* Featured Image */}
                                <div className="featured-img mb-3">
                                <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/64/000000/external-Purchase-business-and-marketing-bearicons-outline-color-bearicons.png"/>
                                </div>
                                {/* Icon Text */}
                                <div className="icon-text">
                                    <h3 className="mb-2">{strings.service3Title}</h3>
                                    <p>{strings.service3Description}</p>
                                </div>
                            </div>
                        </div>
                        <div key={`ffd_${4}`} className="col-12 col-md-6 col-lg-4 my-3 res-margin">
                            {/* Image Box */}
                            <div className="image-box text-center icon-1 p-5 cardF">
                                {/* Featured Image */}
                                <div className="featured-img mb-3">
                                <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-inventory-business-management-justicon-lineal-color-justicon.png"/>
                                </div>
                                {/* Icon Text */}
                                <div className="icon-text">
                                    <h3 className="mb-2">{strings.service4Title}</h3>
                                    <p>{strings.service4Description}</p>
                                </div>
                            </div>
                        </div>
                        <div key={`ffd_${5}`} className="col-12 col-md-6 col-lg-4 my-3 res-margin">
                            {/* Image Box */}
                            <div className="image-box text-center icon-1 p-5 cardF">
                                {/* Featured Image */}
                                <div className="featured-img mb-3">
                                {/* <img src="https://img.icons8.com/office/64/000000/fund-accounting.png"/> */}
                                <img src="https://img.icons8.com/external-sbts2018-lineal-color-sbts2018/64/000000/external-accounting-business-and-finance-sbts2018-lineal-color-sbts2018.png"/>
                                </div>
                                {/* Icon Text */}
                                <div className="icon-text">
                                    <h3 className="mb-2">{strings.service5Title}</h3>
                                    <p>{strings.service5Description}</p>
                                </div>
                            </div>
                        </div>
                        {/* <div key={`ffd_${6}`} className="col-12 col-md-6 col-lg-4 my-3 res-margin">
                            Image Box
                            <div className="image-box text-center icon-1 p-5 cardF">
                                Featured Image
                                <div className="featured-img mb-3">
                                    <img src="https://img.icons8.com/dusk/64/000000/scan-stock.png" />                                    </div>
                                Icon Text
                                <div className="icon-text">
                                    <h3 className="mb-2">{strings.service6Title}</h3>
                                    <p>{strings.service6Description}</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default FeatureSection;