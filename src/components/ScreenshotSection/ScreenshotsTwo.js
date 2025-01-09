import React, { Component } from 'react';
import strings from '../../translations';
import axios from 'axios';
let VideoLink = process.env.REACT_APP_VIDEO_LINK
const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server/themeOneTeamSection";
let API = process.env.REACT_APP_API;



const initData = {
    preHeading: "Awesome",
    preHeadingspan: "Interface",
    heading: "Simple & Beautiful Interface",
    headingText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
    headingTexttwo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati."
}
const data = [
    {
        image: "/img/screenshot_1.jpg"
    },
    {
        image: "/img/screenshot_2.jpg"
    },
    {
        image: "/img/screenshot_3.jpg"
    },
    {
        image: "/img/screenshot_4.jpg"
    },
    {
        image: "/img/screenshot_5.jpg"
    }
]

class ScreenshotSection extends Component {
    state = {
        data: {},
        initData: initData,
        teamData: [],
        teamIcons: [],
        companiesLogos: [],
        sliderArray: [],
    }
    componentDidMount() {
        this.setState({
            initData: initData,
            data: data
        })
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    teamData: res.data.teamData,
                    teamIcons: res.data.teamIcons
                })
                // console.log(this.state.data)
            })
            .catch(err => console.log(err))

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
    componentDidUpdate(prevProps, prevState) {

        let array2 = []
        let i = Math.ceil(this.state.companiesLogos.length / 4)
        if (this.state.companiesLogos.length > 0 && this.state.sliderArray.length < i) {
            for (let j = 0; j < i; j++) {

                let array = this.state.companiesLogos.slice((j * 4), (j * 4) + 4);
                array2.push(array)
            }
            this.setState({ sliderArray: array2 })
        }
    }
    render() {
        const { companiesLogos, sliderArray } = this.state
        return (
            <section id="screenshots" className="section screenshots-area ptb_100">
                {/* Section Heading */}
                {/* App Screenshot Slider Area */}
                {/* Single Screenshot Item */}
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-7">
                            <div className="section-heading text-center">
                                <h2 className="text-capitalize">{strings.clients}</h2>
                                {/* <p className="d-none d-sm-block mt-4">{this.state.initData.headingText}</p>
                                <p className="d-block d-sm-none mt-4">{this.state.initData.headingTexttwo}</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                                {/* Team Thumb */ }
                            <div className="app-screenshots">
                                {sliderArray.map((item, idx) => {
                                        return(
                                            <div div key={`so_${idx}`} className="single-screenshot">
                                            {item.map((img, i) => {
                                                    return (
                                                        <div className="single-team text-center radius-100 overflow-hidden m-2 m-lg-0">
                                                            <div className="team-thumb radius-100 d-inline-block position-relative overflow-hidden">
    
                                                            <img src={img} alt="" />
                                                                {/* Team Overlay */}
    
                                                            </div>
                                                        </div>
    
                                                    )
                                                })}
                                        </div>
                                        )
                                   
                                    
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <section id="pricing" className="video-area" style={{ marginTop: '30px' }}>
                    <div className="container" style={{ height: '100%' }}>
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-10">
                                <div className="section-title text-center pb-25">
                                    <h3 className="title">{strings.video}</h3>
                                    <p className="text"></p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-md-12" >
                                <iframe width="100%" height="500" src={VideoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                <iframe width="100%" height="500" src="https://www.youtube.com/embed/_D6fhTbbUKo?mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </div>
                        </div>
                    </div>
                </section> */}
            </section >
        );
    }
}

export default ScreenshotSection;