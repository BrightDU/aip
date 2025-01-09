import React, { Component } from 'react';
import axios from 'axios';
import strings from '../../translations'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
let API = process.env.REACT_APP_API;

const initData = {
    heading: "Where have we been mentioned",
    headingText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
    headingTexttwo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati."
}

const data = [
    {
        id: "1",
        image: "/img/brand_thumb_1.png"
    },
    {
        id: "2",
        image: "/img/brand_thumb_2.png"
    },
    {
        id: "3",
        image: "/img/brand_thumb_3.png"
    },
    {
        id: "4",
        image: "/img/brand_thumb_4.png"
    },
    {
        id: "5",
        image: "/img/brand_thumb_5.png"
    },
    {
        id: "6",
        image: "/img/brand_thumb_6.png"
    }
]

class BrandingSection extends Component {
    state = {
        initData: {},
        data: [],
        companiesLogos: [],
        slidesToShow: 5
        
    }
    componentDidMount() {
        this.setState({
            initData: initData,
            data: data,
        })
        if (window.innerWidth < 600) {
            this.setState({slidesToShow:3})
        } else if (600 <= window.innerWidth && window.innerWidth <= 768) {
            this.setState({slidesToShow:4})
        } else {
            this.setState({slidesToShow:5})
        }

        axios.get(API + "/download/vendors/logos", {
            headers: {
                "Accept-Language": 'en'
            }
        }).then(({ data }) => {

            // setLoading(false)
            // setCompanies(data);
            this.setState({ loading: false, companiesLogos: data })
        }).catch(() => {
            this.setState({ loading: false, companies: [] })
            // setCompanies([]);
            // setLoading(false)
        });
    }
    
    render() {
        let settings = {
            dots: false,
            autoplay: true,
            infinite: true,
            speed: 100,
            slidesToShow: this.state.slidesToShow,
            slidesToScroll: 1,
        };
        let settings2 = {
            dots: false,
            autoplay: true,
            infinite: true,
            speed: 100,
            slidesToShow: this.state.slidesToShow,
            slidesToScroll: 1,
        };
        const { companiesLogos } = this.state
        return (
            <section className="branding-area ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                                <h2>{strings.clients}</h2>
                                {/* <p className="d-none d-sm-block mt-4">{this.state.initData.headingText}</p>
                            <p className="d-block d-sm-none mt-4">{this.state.initData.headingTexttwo}</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">

                        <Slider {...settings2}>
                            {companiesLogos.splice(0,Math.floor(companiesLogos.length/2)).map((item, idx) => {
                                return (
                                    <div key={`be_${idx}`} className="single-brand p-3" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                                        <img src={item} alt="" style={{margin: 'auto', opacity: 0.9}} />
                                    </div>
                                );
                            })}
                               
                        </Slider>
                        <Slider {...settings}>

                        {companiesLogos.map((item, idx) => {
                                return (
                                    <div key={`be_${idx}`} className="single-brand p-3" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                                        <img src={item} alt="" style={{margin: 'auto', opacity: 0.9}} />
                                    </div>
                                );
                            })} 
                        </Slider>
                        </div>
                        {/* Branding Slider */}
                        {/* <div className="branding-slider owl-carousel op-5">
                            Single Brand
                            {companiesLogos.map((item, idx) => {
                                return (
                                    <div key={`b_${idx}`} className="single-brand p-3">
                                        <img src={item} alt="" />
                                    </div>
                                );
                            })}
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default BrandingSection;