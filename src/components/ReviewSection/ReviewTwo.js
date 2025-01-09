import React, { Component } from 'react';
import strings from '../../translations';
let VideoLink = process.env.REACT_APP_VIDEO_LINK;
const data = [
    {
        id: "1",
        avatorImg: "/img/avatar-1.png",
        reviewer: "John Doe",
        address: "Los Angeles, California",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam rem sunt nulla ducimus expedita, incidunt laborum assumenda. Deleniti iste placeat nostrum incidunt rem laudantium, sapiente, cum, molestias unde, quidem labore.",
        icon_1: "fas fa-star",
        icon_2: "fas fa-star",
        icon_3: "fas fa-star",
        icon_4: "fas fa-star",
        icon_5: "far fa-star"
    },
    {
        id: "2",
        avatorImg: "/img/avatar-2.png",
        reviewer: "Jassica William",
        address: "Los Angeles, California",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam rem sunt nulla ducimus expedita, incidunt laborum assumenda. Deleniti iste placeat nostrum incidunt rem laudantium, sapiente, cum, molestias unde, quidem labore.",
        icon_1: "fas fa-star",
        icon_2: "fas fa-star",
        icon_3: "fas fa-star",
        icon_4: "fas fa-star",
        icon_5: "fas fa-star"
    },
    {
        id: "3",
        avatorImg: "/img/avatar-3.png",
        reviewer: "Johnson Smith",
        address: "Los Angeles, California",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam rem sunt nulla ducimus expedita, incidunt laborum assumenda. Deleniti iste placeat nostrum incidunt rem laudantium, sapiente, cum, molestias unde, quidem labore.",
        icon_1: "fas fa-star",
        icon_2: "fas fa-star",
        icon_3: "fas fa-star",
        icon_4: "fas fa-star",
        icon_5: "far fa-star"
    }
]

class ReviewSection extends Component {
    render() {
        return (
            <section className="section testimonial-area ptb_100">
                {/* Single Testimonial */}
                            {/* Client Name */}
                            {/* Client Address */}
                            {/* Client Rating */}
                            {/* Client Description */}
                        {/* Client Text */}
                {/* <div className="container text-center">
                    <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="testimonials owl-carousel">
                        {data.map((item, idx) => {
                            return(
                                <div key={`rt_${idx}`} className="single-testimonial p-3 p-md-5">
                                    <img src={item.avatorImg} className="mx-auto d-block" alt="" />
                                    <h3 className="client-name mt-4 mb-2">{item.reviewer}</h3>
                                    <h5 className="client-address fw-4">{item.address}</h5>
                                    <div className="client-rating mt-2 mb-3">
                                    <i className={item.icon_1} />
                                    <i className={item.icon_2} />
                                    <i className={item.icon_3} />
                                    <i className={item.icon_4} />
                                    <i className={item.icon_5} />
                                    </div>
                                    <div className="client-description">
                                    <div className="client-text">
                                        <p>{item.text}</p>
                                    </div>
                                    </div>
                                </div>
                            );
                        })}
                        </div>
                    </div>
                    </div>
                </div> */}
                 <section id="" className="video-area" style={{ marginTop: '30px' }}>
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

                                {/* <iframe width="100%" height="500" src="https://www.youtube.com/embed/_D6fhTbbUKo?mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe> */}
                            </div>
                        </div>
                    </div>
                </section>
           
            </section>
        );
    }
}

export default ReviewSection;